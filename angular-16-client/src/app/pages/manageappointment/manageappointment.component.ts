import { Component, ViewChild } from "@angular/core";
import { MessageService } from "primeng/api";
import { Table } from 'primeng/table';

import { GetObjectService } from './../../services/getObject.service';
interface Appointment {
	id: String;
	fullname: String;
	schedules: number;
}

@Component({
	selector: "app-manageappointment",
	templateUrl: "./manageappointment.component.html",
	styleUrls: ["./manageappointment.component.scss"],
	providers: [MessageService]
})
export class ManageappointmentComponent {
  @ViewChild('dt1') dt1: Table | undefined;
  @ViewChild('dt') dt: Table | undefined;
//Drag and drop
	constructor(private msg: MessageService,private getObjectService: GetObjectService) {}
	available: Appointment[] = [];
	selected: Appointment[] = [];

	currentlyDragging: Appointment | null = null;

  calculCommission(price:any,commission:any){
    console.log("commission: ", price,commission)
    return price * (commission/100);
  }

  refreshData (){
		this.getObjectService.findOne("appointment","actif","findByStatus").subscribe(data => {
      this.available = data;
    });

		this.getObjectService.findOne("appointment","inactif","findByStatus").subscribe(data => {
      this.selected = data;
    });
  }

	ngOnInit() {
    this.refreshData();
	}

	dragStart(appointment: Appointment) {
		this.currentlyDragging = appointment;
	}

	drag() {
	}

	dragEnd() {
		this.currentlyDragging = null;
	}

	drop() {
		if (this.currentlyDragging) {
			let currentlyDraggingIndex = this.findIndex(this.currentlyDragging);
			this.selected = [...this.selected, this.currentlyDragging];
      const data ={appointment:this.currentlyDragging,statusFilter:"inactif"}
    this.getObjectService.updateDataObject("appointment","updateStatus",data).subscribe(updatedAppointment => {
      console.log(' mis à jour:', updatedAppointment);
    }, error => {
      console.error('Erreur lors de la mise à jour :', error);
    });
			this.available = this.available.filter(
				(val, i) => i != currentlyDraggingIndex
			);
			this.currentlyDragging = null;
		}
	}

	findIndex(appointment: Appointment) {
		let index = -1;
		for (let i = 0; i < this.available.length; i++) {
			if (appointment.id === this.available[i].id) {
				index = i;
				break;
			}
		}
		return index;
	}
  inactifToActif(appointment: any) {
    this.available = [...this.available, appointment];
    this.selected = this.selected.filter((p) => p.id !== appointment.id);
    const data ={appointment:appointment,statusFilter:"actif"}
    this.getObjectService.updateDataObject("appointment","updateStatus",data).subscribe(updatedAppointment => {
      console.log(' mis à jour:', updatedAppointment);
    }, error => {
      console.error('Erreur lors de la mise à jour :', error);
    });
  }

  applyFilterGlobal($event: any, stringVal: any) {
    if (this.dt1) {
      this.dt1.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
    }
  }

  applyFilterGlobalInactif($event: any, stringVal: any) {
    if (this.dt) {
      this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
    }
  }
}

