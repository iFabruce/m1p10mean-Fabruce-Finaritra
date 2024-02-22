import { Component } from '@angular/core';
import { GetObjectService } from './../../services/getObject.service';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.scss']
})
export class HistoricComponent {
  constructor(private getObjectService: GetObjectService) {}

  historics: any;
  dataJson: any;
  startDate: any = null;
  endDate: any = null;

  ngOnInit() {
    this.updateHistorics();
  }

  onSearch() {
    console.log("Recherche...");
    this.updateHistorics();
  }

  private updateHistorics() {
    this.dataJson = {
      clientId: "65c715fafffd24080e78298d",
      startDate: this.startDate,
      endDate: this.endDate
    };

    this.getObjectService
      .findByDataBody("appointment", "clientAppointment", this.dataJson)
      .subscribe(data => {
        console.log(data);
        this.historics = data;
      });
  }

  formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };

    const formattedDate = new Date(dateString).toLocaleDateString('fr-FR', options);
    return formattedDate;
  }
}
