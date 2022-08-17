import { SettingsModule } from './settings/settings.module';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { AuthGuard } from './auth.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TvComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { MovieComponent } from './movie/movie.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent},
  {path:'movie',canActivate:[AuthGuard],component:MovieComponent},
  {path:'people',canActivate:[AuthGuard],component:PeopleComponent},
  {path:'tv',canActivate:[AuthGuard],component:TvComponent},
  {path:'moviedetails/:id',canActivate:[AuthGuard],component:MoviedetailsComponent},
  {path:'settings', loadChildren:()=>import('./settings/settings.module').then((x)=>x.SettingsModule)},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
