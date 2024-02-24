import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid'; // Import timeGridPlugin
import { AppointmentService } from 'src/app/services/appointment.service';

interface Appointment{
  title: String;
  start: string;
  end: string
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent {
  appointments: any[] | undefined = []
  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    plugins: [dayGridPlugin, timeGridPlugin]
  };
  
  constructor(private appointmentService: AppointmentService){
  }

  ngOnInit() {
    this.appointmentService.getClientAppointment(localStorage.getItem('profil')).subscribe(
      (data: any) => {
        data.forEach((element:any) => {
          // console.log(element)
          this.appointments?.push({
            title: element.service.name+"-"+element.employee.fullname+"-"+element.service.price+"Ar",
            start: element.startingDate,
            end: element.endingDate
          })
        });
        this.calendarOptions.events = this.appointments
      }
    )
    console.log(this.appointments)
  }

}
