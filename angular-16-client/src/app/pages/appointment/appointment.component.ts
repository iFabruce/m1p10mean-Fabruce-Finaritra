import { Component } from '@angular/core';

interface Employe {
  id: String;
  fullname: string;
}

interface Service {
  id: String;
  nomService: string;
}

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent {
  employes: Employe[] | undefined;
  services: Service[] | undefined;
  date: Date | undefined;
  selectedHeure: any = null;

    heures: any[] = [
        { id:1, heure: '08:00 - 09:00', key: 'A' },
        { id:2, heure: '09:00 - 10:00', key: 'M' },
        { id:3, heure: '11:00 - 12:00', key: 'P' },
        { id:4, heure: '13:00 - 14:00', key: 'R' }
    ];


    selectedEmploye: Employe | undefined;
    selectedService: Service | undefined;

    ngOnInit() {
        this.employes = [
            { id: '1', fullname: 'NY' },
            { id: '2', fullname: 'RM' },
            { id: '3', fullname: 'LDN' },
            { id: '4', fullname: 'IST' },
            { id: '5', fullname: 'PRS' }
        ];

        this.services = [
          { id:"1", nomService:"service1"},
          { id:"2", nomService:"service2"},
          { id:"3", nomService:"service3"},
          { id:"4", nomService:"service4"},
          { id:"5", nomService:"service5"}
        ]
    }
}
