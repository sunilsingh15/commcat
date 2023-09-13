import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/map/map.component';
import { SubmitComponent } from './components/submit/submit.component';
import { AboutComponent } from './components/about/about.component';
import { ThanksComponent } from './components/thanks/thanks.component';
import { DonateComponent } from './components/donate/donate.component';
import { CatComponent } from './components/cat/cat.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home | Commcat' },
  { path: 'map', component: MapComponent, title: 'Cat Map | Commcat' },
  { path: 'submit', component: SubmitComponent, title: 'Submit a New Cat | Commcat' },
  { path: 'about', component: AboutComponent, title: 'About | Commcat' },
  { path: 'donate', component: DonateComponent, title: 'Donate | Commcat' },
  { path: 'thanks', component: ThanksComponent, title: 'Thanks! | Commcat' },
  { path: 'cat/:catId', component: CatComponent },
  { path: 'register', component: RegisterComponent, title: 'Register | Commcat' },
  { path: 'login', component: LoginComponent, title: 'Login | Commcat' },
  { path: 'dashboard', loadChildren: () => import("./modules/admin/admin.module").then(m => m.AdminModule) },
  { path: 'forums', loadChildren: () => import("./modules/user/user.module").then(m => m.UserModule) },
  {path: 'forbidden', component: ForbiddenComponent, title: 'Forbidden | Commcat'},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
