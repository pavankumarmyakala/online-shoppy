import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mynav',
  templateUrl: './mynav.component.html',
  styleUrls: ['./mynav.component.css']
})
export class MynavComponent {

  user:any;
  username:any;
  constructor(private route:Router){

  }
  ngOnInit(){
    if(localStorage.getItem('loggedin')!=null){
      this.user= localStorage.getItem('loggedin');
      this.user=JSON.parse(this.user);
   
      this.username=this.user.username;
   
    }
    else{
      this.route.navigateByUrl("/login")
    }
  }

  dologout(){
    localStorage.removeItem('loggedin');
    this.route.navigateByUrl('/login')
  }

}
