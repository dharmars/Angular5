import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MobilePlan } from './mobile-plan';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RechargePlansAPIService {

  baseUrl:string = 'http://localhost:3000/';

  constructor(private http:HttpClient) { 

  }

  findAllPlans():Observable<MobilePlan[]> {
    const rechargePlansUrl = this.baseUrl+'rechargePlans';
    return this.http.get<MobilePlan[]>(rechargePlansUrl);
  }
  findHistory():Observable<Object[]>{
    const histUrl = this.baseUrl+'transHist';
    return this.http.get<Object[]>(histUrl);

  }
}
