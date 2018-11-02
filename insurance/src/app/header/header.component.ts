import { Component, OnInit } from '@angular/core';
import { PageLink } from '../page-link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  majHdg:string;
  logo:string;
  links:PageLink[];

  constructor() { 
    this.majHdg = 'My Insurance';
    this.logo = 'assets/images/myLogo.jpg';
    this.links = [
      {linkText:'Products',linkStyle:'nav-link',linkRef:'products'},
      {linkText:'Customers',linkStyle:'nav-link',linkRef:'history'},
      {linkText:'Advisors',linkStyle:'nav-link',linkRef:'advisors'},
      {linkText:'Get Quote',linkStyle:'nav-link',linkRef:'quote'},
      {linkText:'Branches',linkStyle:'nav-link',linkRef:'branches'}
    ];
  }

  ngOnInit() {
  }

}
