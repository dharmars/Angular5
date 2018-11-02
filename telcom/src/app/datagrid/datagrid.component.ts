import { Component, OnInit, Input } from '@angular/core';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent implements OnInit {

  @Input() gridList:Object[];
  gridHeaders;
  constructor() { }

  ngOnInit() {
    //this.gridHeaders= this.gridList.keys();
    //console.log('InGridList: '+this.gridList);
  }

  showHistDetails(){
    for(var obj in this.gridList[1]){
      if(this.gridList.hasOwnProperty(obj)){
      for(var prop in this.gridList[obj]){
          if(this.gridList[obj].hasOwnProperty(prop)){
             console.log(prop + ':' + this.gridList[obj][prop]);
          }
      }
  }
  }
    
  
      
    
  }

}
