import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
      FormsModule,

  ],
  declarations: [UserListComponent, UserCreateComponent]
})
export class UserModule { }
