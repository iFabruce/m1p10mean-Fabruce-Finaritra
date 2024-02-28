import { Component, ViewChild } from "@angular/core";
import { MessageService } from "primeng/api";
import { Table } from 'primeng/table';

import { GetObjectService } from './../../services/getObject.service';
interface Person {
	id: String;
	fullname: String;
	schedules: number;
}

@Component({
	selector: "app-manageemployee",
	templateUrl: "./manageemployee.component.html",
	styleUrls: ["./manageemployee.component.scss"],
	providers: [MessageService]
})
export class ManageemployeeComponent {
  @ViewChild('dt1') dt1: Table | undefined;
  @ViewChild('dt') dt: Table | undefined;
//Drag and drop
	constructor(private msg: MessageService,private getObjectService: GetObjectService) {}
	available: Person[] = [];
	selected: Person[] = [];

	currentlyDragging: Person | null = null;

  refreshData (){
		this.getObjectService.findOne("employee","actif","findByStatus").subscribe(data => {
      this.available = data;
    });

		this.getObjectService.findOne("employee","inactif","findByStatus").subscribe(data => {
      this.selected = data;
    });


  }

	ngOnInit() {
    this.refreshData();
	}

	dragStart(person: Person) {
		this.currentlyDragging = person;
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
      const data ={employee:this.currentlyDragging,statusFilter:"inactif"}
    this.getObjectService.updateDataObject("employee","updateStatus",data).subscribe(updatedEmploye => {
      console.log(' mis à jour:', updatedEmploye);
    }, error => {
      console.error('Erreur lors de la mise à jour :', error);
    });
			this.available = this.available.filter(
				(val, i) => i != currentlyDraggingIndex
			);
			this.currentlyDragging = null;
		}
	}

	findIndex(person: Person) {
		let index = -1;
		for (let i = 0; i < this.available.length; i++) {
			if (person.id === this.available[i].id) {
				index = i;
				break;
			}
		}
		return index;
	}
  inactifToActif(person: any) {
    this.available = [...this.available, person];
    this.selected = this.selected.filter((p) => p.id !== person.id);
    const data ={employee:person,statusFilter:"actif"}
    this.getObjectService.updateDataObject("employee","updateStatus",data).subscribe(updatedEmploye => {
      console.log(' mis à jour:', updatedEmploye);
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

  //page modif
  visible: boolean = false;
  visibleCreate: boolean = false;

  fullname:any;
  username:any;
  schedules:any;
  id:any;
  employeeModif:any = null;

  showDialog(person:any) {
      this.visible = true;
      this.employeeModif=person;
      this.fullname=person.fullname;
      this.username=person.username;
      this.schedules=person.schedules;
      this.id=person.id;
      console.log(this.employeeModif);

  }
  showDialogCreate(){
    this.visibleCreate=true;
  }
  onModif(){
    const employee = {
      _id:this.id,
      fullname:this.fullname,
      username:this.fullname,
      schedules:this.schedules
    }
    console.log("modif: ",employee)
    this.getObjectService.updateDataObject("employee","updateEmploye",employee).subscribe(updatedEmploye => {
      this.visible=false;
      console.log(' mis à jour:', updatedEmploye);
      this.refreshData()
    }, error => {
      console.error('Erreur lors de la mise à jour :', error);
    });
  }
}

