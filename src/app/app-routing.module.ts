import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MynavComponent } from './mynav/mynav.component';
import { HomeComponent } from './home/home.component';
import { MenswearComponent } from './menswear/menswear.component';
import { GirlswearComponent } from './girlswear/girlswear.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:"",
    component:LoginComponent
  },
  {
    path:'user',
    component:MynavComponent,
    children:[
      {
        path:'home',
        component:HomeComponent
      },{
        path:'men',
        component:MenswearComponent
      },{
        path:'girls',
        component:GirlswearComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
