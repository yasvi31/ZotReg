import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { EnrollPageComponent } from './pages/enroll-page/enroll-page.component';

const routes: Routes = [
  {path:'enroll',component:EnrollPageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'',component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
