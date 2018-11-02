import { Component, OnInit } from '@angular/core';
import { MobilePlan } from '../mobile-plan';
import { RechargePlansAPIService } from '../recharge-plans-api.service';

@Component({
  selector: 'app-show-recharge-plans',
  templateUrl: './show-recharge-plans.component.html',
  styleUrls: ['./show-recharge-plans.component.css']
})
export class ShowRechargePlansComponent implements OnInit {

  rechargePlanList:MobilePlan[];

  constructor(private service:RechargePlansAPIService) { }

  ngOnInit() {
    this.service.findAllPlans().subscribe(
      data => this.rechargePlanList=data,
      err => console.log(err)
    )
  }

}
