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
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.scss']
})


export class PreferenceComponent {
  username: string | undefined;
  employes: Employe[] | undefined;
  services: Service[] | undefined;

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
