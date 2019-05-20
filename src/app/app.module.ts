import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
//import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppPlacementsComponent } from './app-placements/app-placements.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { ReadMeComponent } from './read-me/read-me.component';
import { UserRegiComponent } from './user-regi/user-regi.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

@NgModule({
  declarations: [
    AppComponent,
    AppFooterComponent,
    AppHeaderComponent,
    AppPlacementsComponent,
    HomepageComponent,
    ReadMeComponent,
    UserRegiComponent,
    UserProfileComponent,
    UserLoginComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    NgbModule,
   // KeycloakAngularModule,
    AppRoutingModule,AgGridModule.withComponents([])
  ],
   providers: [ 
     //{
   //  provide: APP_INITIALIZER,
  //   useFactory: initializer,
  //   multi: true,
  //   deps: [KeycloakService]
  // }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
// export function initializer(keycloak: KeycloakService): () => Promise<any> {
//   return (): Promise<any> => keycloak.init();
// }