import { NgModule } from '@angular/core';
import { Routes, RouterModule,Router } from '@angular/router';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppComponent } from './app.component';
import { AppPlacementsComponent } from './app-placements/app-placements.component';
import { UserRegiComponent } from './user-regi/user-regi.component';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { PgdetailsComponent } from './pgdetails/pgdetails.component';
import { ReadMeComponent } from './read-me/read-me.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  {
    path: 'app-root',
    component: AppComponent,
    children:[]
   },
   {
    path:'app-header',
    component: AppHeaderComponent
  },
  {
    path: 'app-footer',
    component: AppFooterComponent
  },
  {
    path: 'app-placements',
    component: AppPlacementsComponent
  },
  {
    path: 'app-user-regi',
    component: UserRegiComponent
  },
  {
    path: 'app-user-profile',
    component: UserProfileComponent
  },
  {
    path: 'app-user-login',
    component: UserLoginComponent
  },
  {
    path: 'app-admin-login',
    component: AdminLoginComponent
  },
  {
    path: 'app-pgdetails',
    component: PgdetailsComponent
  },
  {
    path: 'app-read-me',
    component: ReadMeComponent
  },
  {
    path: 'app-homepage',
    component: HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,FormsModule]
})
export class AppRoutingModule { }
