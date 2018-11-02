import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit {

  user:string;
  constructor() { 
    console.log('inside parent const');
  }

  ngOnInit() {
    console.log('inside on parent init');
  }

  ngAfterViewInit(){
    console.log("Parent afterViewInit");
  }

}
