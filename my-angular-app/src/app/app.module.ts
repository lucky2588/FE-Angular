import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceComponent } from './service/service.component';
import { LogoutComponent } from './logout/logout.component';
import { SeccessComponent } from './seccess/seccess.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';

import { ItemComponent } from './item/item.component';
import { HttpIntercepteBasicAuthService } from './service/http/http-intercepte-basic-auth.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoAppComponent,
    LoginComponent,
    NotFoundComponent,
    MenuComponent,
    FooterComponent,
    ServiceComponent,
    LogoutComponent,
    SeccessComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS , useClass: HttpIntercepteBasicAuthService , multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
