import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppComponent } from './app.component';
import { AppPlacementsComponent } from './app-placements/app-placements.component';
import { UserRegiComponent } from './user-regi/user-regi.component';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserLoginComponent } from './user-login/user-login.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,FormsModule]
})
export class AppRoutingModule { }
