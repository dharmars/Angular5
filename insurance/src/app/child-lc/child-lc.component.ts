import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-lc',
  templateUrl: './child-lc.component.html',
  styleUrls: ['./child-lc.component.css']
})
export class ChildLCComponent implements OnInit, OnChanges {
  
  @Input() name:string;
  constructor() { 
    console.log('child const called');
    console.log('input property in child const '+this.name);
  }

  ngOnInit() {
    console.log('child init called');
    console.log('input property in child init '+this.name);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChange prevVal: '+changes.name.previousValue);
    console.log('onChange currVal: '+changes.name.currentValue);
  }

}
