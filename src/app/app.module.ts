import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';

import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppPlacementsComponent } from './app-placements/app-placements.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { ReadMeComponent } from './read-me/read-me.component';
import { UserRegiComponent } from './user-regi/user-regi.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AppFooterComponent,
    AppHeaderComponent,
    AppPlacementsComponent,
    HomepageComponent,
    ReadMeComponent,
    UserRegiComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    NgbModule,
    AppRoutingModule,AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
