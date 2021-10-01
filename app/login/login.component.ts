import { Component, OnInit,Input} from '@angular/core';
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  constructor(user: UserService) { 
    this.user=user;
    console.log(user)
  }

@Input("myUser") user:UserService;

  ngOnInit() {
  }

  login(user:UserService) {

  alert(user.name);

  }


}