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
    HomeComponent
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
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
