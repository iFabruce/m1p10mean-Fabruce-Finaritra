import { Component, Input } from '@angular/core';
import { GetObjectService } from './../../services/getObject.service';

@Component({
  selector: 'app-update-profil',
  templateUrl: './updateprofilemployee.component.html',
  styleUrls: ['./updateprofilemployee.component.scss']
})
export class UpdateprofilemployeeComponent {
  @Input() refreshData: (() => void) | any;
  constructor(private getObjectService: GetObjectService) {}

  fullname:any;
  username:any;
  schedules:any;
  password:any;

  addemployee(){
    const employee = {
      _id:"65c8d1b8daf42845ffcd372d",
      fullname:this.fullname,
      username:this.username,
      schedules:this.schedules,
      password:this.password,
      status:"actif"
    }
    this.getObjectService.updateDataObject("employee","updateEmploye",employee).subscribe(updatedEmploye => {
      window.location.reload()
      console.log(' mis à jour:', updatedEmploye);
    }, error => {
      console.error('Erreur lors de la mise à jour :', error);
    });
  }
}
