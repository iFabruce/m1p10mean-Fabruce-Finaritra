import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss'],
})
export class MenubarComponent {
  @Input() typeUser: string | undefined;
  title = 'Menu';
  items: MenuItem[] | undefined;
  ngOnInit() {
    if (localStorage.getItem('type') == 'Client') {
      this.items = [
        {
          label: 'Rendez-vous',
          items: [
            {
              label: 'Ajouter',
              icon: 'pi pi-plus',
              routerLink: '/appointment',
            },
            {
              label: 'Historique',
              icon: 'pi pi-align-left',
              routerLink: '/historics',
            },
          ],
        },
        {
          label: 'Gestion',
          items: [
            {
              label: 'Preference',
              icon: 'pi pi-heart',
              routerLink: '/preference',
            },
          ],
        },
      ];
    }else if(localStorage.getItem('type') == 'Employee'){
      this.items = [
        {
          label: 'Gestion',
          items: [
            {
              label: 'Calendrier des rendez-vous',
              icon: 'pi pi-calendar',
              routerLink: 'employee/calendarEmployee',
            },
            {
              label: 'Suivi des tâches et commision',
              icon: 'pi pi-check-circle',
              routerLink: '/',
            },
            
          ],
        },
      ];
    }else{
      this.items = [
        {
          label: 'Parametre',
          items: [
            {
              label: 'Profil',
              icon: 'pi pi-users',
              routerLink: 'manager/manageEmploye',
            },
            {
              label: 'Service',
              icon: 'pi pi-briefcase',
              routerLink: 'manager/manageService',
            },  
            {
              label: "Temps moyen de travail",
              icon: 'pi pi-clock',
              routerLink: 'manager/working-time',
            },
            {
              label: "Chiffre d'affaire journalier",
              icon: 'pi pi-dollar',
              routerLink: 'manager/chiffre-affaire-daily',
            },
            {
              label: "Chiffre d'affaire mensuel",
              icon: 'pi pi-dollar',
              routerLink: 'manager/chiffre-affaire-monthly',
            },
            {
              label: 'Réservation journalière',
              icon: 'pi pi-tag',
              routerLink: 'manager/tracking/daily',
            },
            {
              label: 'Réservation mensuelle',
              icon: 'pi pi-tags',
              routerLink: 'manager/tracking/monthly',
            },{
              routerLink: 'employee/updateProfil',
            }
          ],
        },
      ];
    }
  }
}
