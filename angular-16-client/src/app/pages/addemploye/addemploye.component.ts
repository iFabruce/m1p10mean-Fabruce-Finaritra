import { Component, Input } from '@angular/core';
import { GetObjectService } from './../../services/getObject.service';

@Component({
  selector: 'app-addemploye',
  templateUrl: './addemploye.component.html',
  styleUrls: ['./addemploye.component.scss']
})
export class AddemployeComponent {
  @Input() refreshData: (() => void) | any;
  constructor(private getObjectService: GetObjectService) {}

  fullname:any;
  username:any;
  schedules:any;
  password:any;

  addemployee(){
    const employee = {
      fullname:this.fullname,
      username:this.username,
      schedules:this.schedules,
      password:this.password,
      status:"actif"
    }
    this.getObjectService.create("employee","create",employee).subscribe(createdEmploye => {
      window.location.reload()
      console.log(' mis à jour:', createdEmploye);
    }, error => {
      console.error('Erreur lors de la mise à jour :', error);
    });
  }
}
