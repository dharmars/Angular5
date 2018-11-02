import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ShowAdvisorsComponent } from './show-advisors/show-advisors.component';
import { ShowQuoteComponent } from './show-quote/show-quote.component';
import { MenuComponent } from './menu/menu.component';
import { SearchBranchComponent } from './search-branch/search-branch.component';
import { ShowBranchComponent } from './show-branch/show-branch.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HighLightDirective } from './high-light.directive';
import { AddElementdirectiveDirective } from './add-elementdirective.directive';
import { ShowLocationsComponent } from './show-locations/show-locations.component';
import { ShowPolicyDetailsComponent } from './show-policy-details/show-policy-details.component';
import { FilterPipe } from './filter.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { ShowHealthPolicyComponent } from './show-health-policy/show-health-policy.component';
import { ShowLifePolicyComponent } from './show-life-policy/show-life-policy.component';
import { InsrDetailsComponent } from './insr-details/insr-details.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { ChildLCComponent } from './child-lc/child-lc.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ShowAdvisorsComponent,
    ShowQuoteComponent,
    MenuComponent,
    SearchBranchComponent,
    ShowBranchComponent,
    TestimonyComponent,
    LoginComponent,
    LogoutComponent,
    HighLightDirective,
    AddElementdirectiveDirective,
    ShowLocationsComponent,
    ShowPolicyDetailsComponent,
    FilterPipe,
    ShowHealthPolicyComponent,
    ShowLifePolicyComponent,
    InsrDetailsComponent,
    LifeCycleComponent,
    ChildLCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [HttpClient],
  entryComponents: [ShowLocationsComponent],
  bootstrap: [LifeCycleComponent]
})
export class AppModule { }
