import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickCounter: number = 0;

  constructor() { }

  ngOnInit() {
    generateDynamicTable();
  }

  countClick() {
    this.clickCounter += 1;
  }

}

var myContacts = [

	];

function generateDynamicTable(){

  var noOfContacts = myContacts.length;

  if(noOfContacts>0){


    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");
    table.style.width = '50%';
    table.setAttribute('border', '1');
    table.setAttribute('cellspacing', '0');
    table.setAttribute('cellpadding', '5');

    // retrieve column header ('Name', 'Email', and 'Mobile')

    var col = []; // define an empty array
    for (var i = 0; i < noOfContacts; i++) {
      for (var key in myContacts[i]) {
        if (col.indexOf(key) === -1) {
          col.push(key);
        }
      }
    }

    // CREATE TABLE HEAD .
    var tHead = document.createElement("thead");


    // CREATE ROW FOR TABLE HEAD .
    var hRow = document.createElement("tr");

    // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");
        th.innerHTML = col[i];
        hRow.appendChild(th);
    }
    tHead.appendChild(hRow);
    table.appendChild(tHead);


    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("myContacts");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);

  }
}
