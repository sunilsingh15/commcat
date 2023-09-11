import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/map/map.component';
import { SubmitComponent } from './components/submit/submit.component';
import { AboutComponent } from './components/about/about.component';
import { ThanksComponent } from './components/thanks/thanks.component';
import { DonateComponent } from './components/donate/donate.component';
import { CatComponent } from './components/cat/cat.component';

const routes: Routes = [
  {path: '', component: HomeComponent, title: 'Home | Commcat'},
  {path: 'map', component: MapComponent, title: 'Cat Map | Commcat'},
  {path: 'submit', component: SubmitComponent, title: 'Submit a New Cat | Commcat'},
  {path: 'about', component: AboutComponent, title: 'About | Commcat'},
  {path: 'donate', component: DonateComponent, title: 'Donate | Commcat'},
  {path: 'thanks', component: ThanksComponent, title: 'Thanks! | Commcat'},
  {path: 'cat/:catId', component: CatComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
