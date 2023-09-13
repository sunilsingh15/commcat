import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumsComponent } from './components/forums/forums.component';

const routes: Routes = [
  { path: '', component: ForumsComponent, title: 'Forums | Commcat' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
