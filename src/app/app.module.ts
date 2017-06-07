import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {DashboardComponent} from 'app/main-components/dashboard/dashboard.component';
import { NewItemComponent } from './main-components/new-item/new-item.component';
import { NotificationComponent } from './main-components/notification/notification.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'newitem', component: NewItemComponent },
  { path: 'notification', component: NotificationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewItemComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
