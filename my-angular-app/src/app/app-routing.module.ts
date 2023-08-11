import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {  TodoAppComponent } from './todo-app/todo-app.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterGuardService } from './service/router-guard.service';
import { SeccessComponent } from './seccess/seccess.component';
import { ItemComponent } from './item/item.component';

// welcome define Routers
const routes: Routes = [
{path:'login',component: LoginComponent },
{path:'',component: LoginComponent },
{path:'welcome/:name',component: SeccessComponent   ,canActivate:[RouterGuardService]},
{path:'todoApp',component: TodoAppComponent ,canActivate:[RouterGuardService] },
{path:'item/:id',component: ItemComponent ,canActivate:[RouterGuardService] },

{path:'logout',component: LogoutComponent ,canActivate:[RouterGuardService] },
{path:'**',component: NotFoundComponent ,canActivate:[RouterGuardService]  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
