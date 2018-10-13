import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-only-layout',
  templateUrl: './footer-only-layout.component.html',
  styleUrls: ['./footer-only-layout.component.css']
})
export class FooterOnlyLayoutComponent implements OnInit {

  constructor() {
    console.log('Footer only layout constructor called');
  }

  ngOnInit() {
  }

}
