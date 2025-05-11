import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingComponent, AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { ManagementComponent } from './admin/management/management.component';




@NgModule({
  declarations: [
    AppComponent,
    AppRoutingComponent,
    DashboardComponent,
    ManagementComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
