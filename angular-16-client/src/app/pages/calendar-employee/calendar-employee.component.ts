import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid'; // Import timeGridPlugin
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-calendar-employee',
  templateUrl: './calendar-employee.component.html',
  styleUrls: ['./calendar-employee.component.css']
})
export class CalendarEmployeeComponent {
  appointments: any[] | undefined
  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    plugins: [dayGridPlugin, timeGridPlugin]
  };
  
  constructor(private appointmentService: AppointmentService){
    this.appointments=[]
  }

  ngOnInit() {
    this.appointmentService.getEmployeeAppointment(localStorage.getItem('profil')).subscribe(
      (data: any) => {
        data.forEach((element:any) => {
          console.log(element)
          this.appointments?.push({
            title: element.service.name+"-"+element.service.price+"Ar",
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
