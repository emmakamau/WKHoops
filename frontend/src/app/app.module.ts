import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YogaComponent } from './yoga/yoga.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { RouterModule } from '@angular/router';
import { AngularEmbedVideoModule } from 'angular-embed-video';
import { SafePipe } from './safe.pipe';


import { UserAuthenticationComponent } from './user-authentication/user-authentication.component';
import { UserAuthenticationService } from './user-authentication.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrainingsComponent } from './trainings/trainings.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ResetPasswordComponent } from './user-authentication/reset-password/reset-password.component';
import { ResetPasswordFormComponent } from './user-authentication/reset-password-form/reset-password-form.component';
import { LogoutComponent } from './user-authentication/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    YogaComponent,
    WorkoutsComponent,
    SafePipe,   
    UserAuthenticationComponent, TrainingsComponent, HomeComponent, NavbarComponent, ResetPasswordComponent, ResetPasswordFormComponent, LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularEmbedVideoModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'auth', component: UserAuthenticationComponent},
      {path: 'workouts', component: WorkoutsComponent},
      {path: 'yoga', component: YogaComponent},
      {path: 'training', component: TrainingsComponent},
      {path: 'auth/reset-password', component: ResetPasswordComponent},
      {path: 'auth/reset-password-form', component: ResetPasswordFormComponent},
      {path: 'logout', component: HomeComponent}
    ]),  
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserAuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
