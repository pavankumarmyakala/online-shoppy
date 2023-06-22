import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MynavComponent } from './mynav/mynav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenswearComponent } from './menswear/menswear.component';
import { GirlswearComponent } from './girlswear/girlswear.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MynavComponent,
    HomeComponent,
    LoginComponent,
    MenswearComponent,
    GirlswearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
