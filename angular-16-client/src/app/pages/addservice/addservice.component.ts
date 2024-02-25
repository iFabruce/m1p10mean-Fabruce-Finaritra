import { Component, Input } from '@angular/core';
import { GetObjectService } from './../../services/getObject.service';

@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.scss']
})
export class AddserviceComponent {
  @Input() refreshData: (() => void) | any;
  constructor(private getObjectService: GetObjectService) {}

  name:any;
  price:any;
  duration:any;
  commission:any;

  addservice(){
    const service = {
      name:this.name,
      price:this.price,
      duration:this.duration,
      commission:this.commission,
      status:"actif"
    }
    this.getObjectService.create("service","create",service).subscribe(createdService => {
      window.location.reload()
      console.log(' mis à jour:', createdService);
    }, error => {
      console.error('Erreur lors de la mise à jour :', error);
    });
  }
}
