import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowRechargePlansComponent } from './show-recharge-plans/show-recharge-plans.component';
import { HttpClient } from '@angular/common/http';
import { DatagridComponent } from './datagrid/datagrid.component';
import { ShowHistoryComponent } from './show-history/show-history.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowRechargePlansComponent,
    DatagridComponent,
    ShowHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
