import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { DataService } from './../data.service';
import { ProfileComponent } from '../profile/profile.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatMenuTrigger } from '@angular/material/menu';
import { FormControl } from "@angular/forms";
import { forkJoin } from 'rxjs';


export interface Option {
  value: any;
  viewValue: any;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users: any = [];
  usersDataSource = new MatTableDataSource(this.users);
  displayedColumns: string[] = [
    "name",
    "businesstype",
    "appstatus",
    "address",
    "email"
  ];

  options: Option[] = [
    {value: 'name-0', viewValue: 'Name'},
    {value: 'businesstype-1', viewValue: 'Business Type'},
    {value: 'appstatus-2', viewValue: 'Application Status'},
    {value: 'address-2', viewValue: 'Address'},
    {value: 'email-2', viewValue: 'Email'},
  ];

  public selected = "Name";
  public first = "";


  constructor(private _http: HttpService, private http: HttpClient, private dataService:DataService) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.usersDataSource.paginator = this.paginator;
    this.usersDataSource.sort = this.sort;
    this._http
    .getDatabase()
    .subscribe((response : any) => {
      this.users = response;
      this.usersDataSource.data = this.users;
    });
  }


  showProfile(first:string){
    console.log("here");
    let response1 = this.http
    .get("http://localhost:3000/products/" + first)
    .subscribe((response : any) => {
      this.users = response;
      this.usersDataSource.data = this.users;
      this.users.firstname = this.users.firstname.charAt(0).toUpperCase() + this.users.firstname.slice(1);
    });
  }

  onUpdate(event: Event) {
    this.first = ((<HTMLInputElement>event.target).value);
    console.log(this.first);
  }

}
export interface UsersElement {
  name: string;
  businesstype:string;
  appstatus: string;
  address: string;
  email: string;
}
