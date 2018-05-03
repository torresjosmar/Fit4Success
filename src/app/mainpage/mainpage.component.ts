import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  bannerTitle : String;
  bannerTitle2 : String;
  bannerSubtitle : String;
 
  constructor() {
    this.bannerTitle = 'YOUR FITNESS';
    this.bannerTitle2 = 'IS OUR PASSION';
    this.bannerSubtitle = 'STARTING FROM $19.99/MONTH';
   }

  ngOnInit() {
  }
 
}
