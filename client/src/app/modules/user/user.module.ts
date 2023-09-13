import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ForumsComponent } from './components/forums/forums.component';
import { NewThreadComponent } from './components/new-thread/new-thread.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ThreadComponent } from './components/thread/thread.component';


@NgModule({
  declarations: [
    ForumsComponent,
    NewThreadComponent,
    ThreadComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
