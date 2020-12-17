import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StudyListComponent } from './components/study-list/study-list.component';
import { AddComponent } from './components/add/add.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { EnrollPageComponent } from './pages/enroll-page/enroll-page.component';
import { EnrollListComponent } from './components/enroll-list/enroll-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    StudyListComponent,
    AddComponent,
    LoginPageComponent,
    EnrollPageComponent,
    EnrollListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
