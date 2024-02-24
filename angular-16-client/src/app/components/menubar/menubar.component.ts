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
    if (this.typeUser === 'client') {
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
    }else if(this.typeUser === "manager"){
      this.items = [
        {
          label: 'Gestion',
          items: [
            {
              label: 'Employé',
              icon: 'pi pi-users',
              routerLink: '/manageEmploye',
            },
            {
              label: 'Service',
              icon: 'pi pi-briefcase',
              routerLink: '/manageEmploye',
            }
          ],
        },
      ];
    }else{
      this.items = [
        {
          label: 'Gestion',
          items: [
            {
              label: 'Employé',
              icon: 'pi pi-users',
              routerLink: '/manageEmploye',
            },
            {
              label: 'Service',
              icon: 'pi pi-briefcase',
              routerLink: '/manageEmploye',
            }
          ],
        },
      ];
    }
  }
}
