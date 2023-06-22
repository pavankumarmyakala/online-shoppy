import { Component } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  users:any;
  constructor(private service:DataserviceService){
                                      
  }

  ngOnInit(){
    this.service.getUsers().subscribe((res)=>{
      this.users=res;
      console.log(this.users);
    })
  }


}
