import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid'; // Import timeGridPlugin

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    events: [
      { title: 'event 1', start: '2024-02-22T08:00:00',end: '2024-02-22T10:00:00' },
    ],
    plugins: [dayGridPlugin, timeGridPlugin]
  };
}
