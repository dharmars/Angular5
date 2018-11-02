import { Component, OnInit } from '@angular/core';
import { RechargePlansAPIService } from '../recharge-plans-api.service';

@Component({
  selector: 'app-show-history',
  templateUrl: './show-history.component.html',
  styleUrls: ['./show-history.component.css']
})
export class ShowHistoryComponent implements OnInit {

  histDetList:Object[];
  constructor(private service:RechargePlansAPIService) { }

  ngOnInit() {
    this.service.findHistory().subscribe(
      data => this.histDetList=data,
      err => console.log(err)
    );
  }

}
