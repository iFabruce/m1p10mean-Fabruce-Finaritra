import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from 'primeng/menu';
import { HistoricComponent } from './pages/historic/historic.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { MenutopComponent } from './components/menutop/menutop.component';
import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { WalletComponent } from './pages/wallet/wallet.component';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { InputTextModule } from 'primeng/inputtext';
import { SigninComponent } from './pages/signin/signin.component';
import { PasswordModule } from 'primeng/password';
import { SignupComponent } from './pages/signup/signup.component';
import { PreferenceComponent } from './pages/preference/preference.component';
import { DropdownModule } from 'primeng/dropdown';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { HomeComponent } from './pages/home/home.component';
import { TableModule } from 'primeng/table';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
// import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ManageemployeeComponent } from './pages/manageemployee/manageemployee.component';
import { DragDropModule } from 'primeng/dragdrop';
import { CardModule } from 'primeng/card';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ManageserviceComponent } from './pages/manageservice/manageservice.component';
@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    HistoricComponent,
    MenubarComponent,
    MenutopComponent,
    WalletComponent,
    SigninComponent,
    SignupComponent,
    PreferenceComponent,
    AppointmentComponent,
    HomeComponent,
    CalendarComponent,
    ManageemployeeComponent,
    ManageserviceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    MenuModule,
    BrowserAnimationsModule,
    DataViewModule,
    PanelModule,
    DialogModule,
    InputNumberModule,
    AvatarGroupModule,
    AvatarModule,
    InputTextModule,
    PasswordModule,
    DropdownModule,
    CalendarModule,
    RadioButtonModule,
    TableModule,
    MessagesModule,
    ToastModule,
    DragDropModule,
    CardModule,
    ScrollPanelModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
