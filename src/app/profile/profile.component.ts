import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpClient } from '@angular/common/http'
import { DataService } from './../data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  data: any;
  constructor(private http: HttpClient, private dataService:DataService) { }

  ngOnInit() {
    this.http.get("http://localhost:3000/products/").subscribe((data : any) => {
      this.data = data;
    });
  }
}
    
