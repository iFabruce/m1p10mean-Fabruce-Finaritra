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
import { TrackingComponent } from './pages/tracking/monthly/tracking.component';
import { WorkingTimeComponent } from './pages/working-time/working-time.component';
import { DailyTrackingComponent } from './pages/tracking/daily/daily-tracking/daily-tracking.component';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'add',   canActivate: [AuthGuard], component: AddTutorialComponent },
  { path: 'client/preference',   canActivate: [AuthGuard], component: PreferenceComponent },
  { path: 'client/historics',   canActivate: [AuthGuard], component: HistoricComponent },
  { path: 'client/appointment',   canActivate: [AuthGuard], component: AppointmentComponent },
  { path: 'client/calendar',  canActivate: [AuthGuard], component: CalendarComponent },
  { path: 'manager/manageEmploye', canActivate: [AuthGuard], component: ManageemployeeComponent },
  { path: 'manager/tracking/daily', canActivate: [AuthGuard], component: DailyTrackingComponent },
  { path: 'manager/tracking/monthly', canActivate: [AuthGuard], component: TrackingComponent },
  { path: 'manager/workingTime', canActivate: [AuthGuard], component: WorkingTimeComponent },
  // { path: 'tutorials', component: TutorialsListComponent },
  // { path: 'tutorials/:id', component: TutorialDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
