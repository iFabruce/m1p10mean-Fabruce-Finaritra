import { GetObjectService } from './../../services/getObject.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.scss']
})


export class PreferenceComponent {
  username: string | undefined;
  employes: any;
  services: any;

    selectedEmploye: any;
    selectedService: any;

    constructor(private getObjectService: GetObjectService) {}

    ngOnInit() {
      this.getObjectService.fetchData("employee","findAll").subscribe(data => {
        this.employes = data;
      });

      this.getObjectService.fetchData("service","findAll").subscribe(data => {
        this.services = data;
      });
    }

    updateFavorite() {
      console.log("tonga")
      console.log(this.selectedEmploye.id+","+this.selectedService.id)
      if (this.selectedEmploye && this.selectedService) {
        const clientId = '65cd10c1598e80e655057dfa';
        const favoriteEmployee = {id: this.selectedEmploye.id, fullname: this.selectedEmploye.fullname}
        const favoriteService = {id: this.selectedService.id, fullname: this.selectedService.name}
        const data = {favoriteEmployee, favoriteService};
        this.getObjectService.updateData("client","updateFavorite",clientId,data).subscribe(updatedClient => {
          console.log(' mis à jour:', updatedClient);
        }, error => {
          console.error('Erreur lors de la mise à jour :', error);
        });
      }
    }

    onServiceChange(event: any) {
      console.log('Service sélectionné :', this.selectedService);
    }
}
