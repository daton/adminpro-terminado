import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';



//Rutas
import { AppRoutes } from './app.routes';

import { RegisterComponent } from './login/register.component';
import { PagesModule } from './pages/pages.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent

   
  ],
  imports: [BrowserModule, AppRoutes, PagesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}