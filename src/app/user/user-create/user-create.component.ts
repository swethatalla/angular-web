import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from "../user";
import { UserService } from "../user.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
  providers: [UserService]
})
export class UserCreateComponent implements OnInit {

public user=new User(0, '', '', '');
  constructor(private router: Router,
              private userService: UserService) { }

  ngOnInit() {
  console.log(this.router.url);
  let array=this.router.url.split("/");
    if(array.length==4)
    {

      this.userService.findById(parseInt(array[3])).subscribe(
        user => {
          this.user = user;
        },
        err => {
          console.log(err);
        }

      );
    }
    console.log(this.user);
  }

  entereduser(user: User)
  {

    this.user=user;
    if(this.user.id>0){
      this.userService.updateUser(this.user).subscribe(

          result => console.log(result),
        err => {
          console.log(err);
        }

      );
    }
else{
      this.userService.saveUser(this.user).subscribe(

          result => console.log(result),
        err => {
          console.log(err);
        }

      );
    }


  }

}
