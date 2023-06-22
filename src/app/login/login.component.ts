import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username:any;
  password:any;
  pwd:any;
  user:any;
  constructor(private route:Router){

  }
  doLogin(){
    this.pwd=this.username.substring(0,3);
    if(this.password==this.pwd){
     this.user={
      "username":this.username,
      "password":this.password
     }

     localStorage.setItem('loggedin',JSON.stringify(this.user));
     this.route.navigateByUrl("/user/home")
    }
    else{
      alert("login failed")
    }
  }

}
