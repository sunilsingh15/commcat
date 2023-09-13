import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumsComponent } from './components/forums/forums.component';
import { NewThreadComponent } from './components/new-thread/new-thread.component';
import { ThreadComponent } from './components/thread/thread.component';

const routes: Routes = [
  { path: '', component: ForumsComponent, title: 'Forums | Commcat' },
  { path: 'new', component: NewThreadComponent, title: 'New Thread | Commcat'},
  { path: ':threadId', component: ThreadComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
