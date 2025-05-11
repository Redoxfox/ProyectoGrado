import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './public/home/home.component';
import { DetailsComponent } from './public/details/details.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { ManagementComponent } from './admin/management/management.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'register', component:RegisterComponent},
  {path:'home', component:HomeComponent},
  {path:'details/:id', component:DetailsComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'management', component:ManagementComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const  AppRoutingComponent = [
  LoginComponent,
  RegisterComponent,
  HomeComponent,
  HeaderComponent,
  FooterComponent,
  DetailsComponent,
  DashboardComponent,
  ManagementComponent,
];

