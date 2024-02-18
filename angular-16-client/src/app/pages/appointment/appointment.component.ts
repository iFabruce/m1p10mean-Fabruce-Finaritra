  import { Component, AfterViewInit  } from '@angular/core';
  import { EmployeeService } from 'src/app/services/employee.service';
  import { ServiceService } from 'src/app/services/service.service';
  import { AppointmentService } from 'src/app/services/appointment.service';

  import { Router } from '@angular/router';

  interface Employe {
    id: String;
    fullname: string;
  }

  interface Service {
    id: String;
    name: String;
  }
  interface Appointment {
    id: String;
    startingDate: String;
    endingDate: String;
  }

  @Component({
    selector: 'app-appointment',
    templateUrl: './appointment.component.html',
    styleUrls: ['./appointment.component.scss']
  })
  export class AppointmentComponent {
  
    constructor(private router: Router, private employeeService: EmployeeService, private serviceService: ServiceService, private appointmentService: AppointmentService){}
    
    employes: Employe[] | undefined;
    services: Service[] | undefined;
    date: Date | undefined;
    selectedHeure: any = null;
    heures: any[] = [
        { id:1, heure: '08:00', key: '8' },
        { id:2, heure: '09:00', key: '9' },
        { id:3, heure: '10:00', key: '10' },
        { id:4, heure: '11:00', key: '11' },
        { id:4, heure: '12:00', key: '12' },
        { id:4, heure: '13:00', key: '13' },
        { id:4, heure: '14:00', key: '14' },
        { id:4, heure: '15:00', key: '15' },
        { id:4, heure: '16:00', key: '15' }
    ];


    selectedEmploye: Employe | undefined;
    selectedService: Service | undefined;

    appointment: Appointment[] | undefined;
    // message: String | undefined;

    formatDate(date: any) {
      const year = date?.getFullYear();
        const month = date ? ("0" + (date.getMonth() + 1)).slice(-2) : '';
        const day = ("0" + date?.getDate()).slice(-2); // Ajoute un zéro en tête si nécessaire
        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate
    }
    onValeurInputChange() {
        if(this.selectedEmploye!==undefined && !this.date!==undefined){
          //Formater la date en YYYY-MM-DD
          const year = this.date?.getFullYear();
          const month = this.date ? ("0" + (this.date.getMonth() + 1)).slice(-2) : '';
          const day = ("0" + this.date?.getDate()).slice(-2); // Ajoute un zéro en tête si nécessaire
          const formattedDate = `${year}-${month}-${day}`;

          this.appointmentService.employeeAppointment(this.selectedEmploye?.id,formattedDate).subscribe(
            (data: any) => {
              this.appointment=data
            }
          )
        }
    }

    ngOnInit() {
      this.serviceService.findAll().subscribe(
        (data: any) => {
          this.services = data
        }
      )
      this.employeeService.findAll().subscribe(
        (data: any) => {
          this.employes = data
        }
      )
    }

    //Methode
    getData(): any{
      console.log(this.selectedEmploye?.id)
      console.log(this.selectedService?.id)
      console.log(`
      Date: ${this.date}
      Heure: ${this.selectedHeure}
      `)
      console.log(localStorage.getItem('profil'))
    }

    addAppointment(): any{
      this.appointmentService.addAppointment(this.formatDate(this.date), this.selectedHeure, localStorage.getItem('client'),  this.selectedService?.id, this.selectedEmploye?.id)
        .subscribe(
          (data: any) => {
            console.log(data)
          }
        )
    }
  }
