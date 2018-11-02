import { Component, OnInit } from '@angular/core';
import { InsuranceAPIService } from '../insurance-api.service';
import { PolicyDetail } from '../policy-detail';

@Component({
  selector: 'app-show-health-policy',
  templateUrl: './show-health-policy.component.html',
  styleUrls: ['./show-health-policy.component.css']
})
export class ShowHealthPolicyComponent implements OnInit {

  healthPolicyDetails:PolicyDetail[];
  page=0;
  constructor(private service:InsuranceAPIService) { }

  ngOnInit() {
    this.service.findPolicyDetails().subscribe(
      data => this.healthPolicyDetails=data,
      err => console.log(err)
    )
  }

}
