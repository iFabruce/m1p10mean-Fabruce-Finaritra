import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { HistoricComponent } from './pages/historic/historic.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PreferenceComponent } from './pages/preference/preference.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { AuthGuard } from './services/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { CalendarComponent } from './pages/calendar/calendar.component';

import { ManageemployeeComponent } from './pages/manageemployee/manageemployee.component';
import { ManageserviceComponent } from './pages/manageservice/manageservice.component';
import { UpdateprofilemployeeComponent } from './pages/updateprofilemployee/updateprofilemployee.component';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'add',   canActivate: [AuthGuard], component: AddTutorialComponent },
  { path: 'client/preference',   canActivate: [AuthGuard], component: PreferenceComponent },
  { path: 'client/historics',   canActivate: [AuthGuard], component: HistoricComponent },
  { path: 'client/appointment',   canActivate: [AuthGuard], component: AppointmentComponent },
  { path: 'manager/manageEmploye',   canActivate: [AuthGuard], component: ManageemployeeComponent },
  { path: 'manager/manageService',   canActivate: [AuthGuard], component: ManageserviceComponent },
  { path: 'employee/updateProfil',   canActivate: [AuthGuard], component: UpdateprofilemployeeComponent },
  // { path: 'tutorials', component: TutorialsListComponent },
  // { path: 'tutorials/:id', component: TutorialDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
