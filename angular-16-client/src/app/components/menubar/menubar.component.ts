import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent {
  title = 'Menu';
  items: MenuItem[] | undefined;
    ngOnInit() {
        this.items = [
            {
                label: 'Rendez-vous',
                items: [
                    {
                        label: 'Ajouter',
                        icon: 'pi pi-plus',
                        routerLink: '#'
                    },
                    {
                        label: 'Historique',
                        icon: 'pi pi-align-left',
                        routerLink:'/historics'
                    }
                ]
            },
            {
                label: 'Gestion',
                items: [
                    {
                        label: 'Preference',
                        icon: 'pi pi-heart',
                        routerLink:'/preference'
                    }
                ]
            }
        ];
    }
}
