import { Component, ViewChild } from "@angular/core";
import { MessageService } from "primeng/api";
import { Table } from 'primeng/table';

import { GetObjectService } from './../../services/getObject.service';
interface Service {
	id: String;
	name: String;
	price: number;
	duration: number;
	commission: number;
}

@Component({
	selector: "app-manageservice",
	templateUrl: "./manageservice.component.html",
	styleUrls: ["./manageservice.component.scss"],
	providers: [MessageService]
})
export class ManageserviceComponent {
  @ViewChild('dt1') dt1: Table | undefined;
  @ViewChild('dt') dt: Table | undefined;

	constructor(private msg: MessageService,private getObjectService: GetObjectService) {}
	available: Service[] = [];
	selected: Service[] = [];

	currentlyDragging: Service | null = null;

  freshList(){
		this.getObjectService.findOne("service","actif","findByStatus").subscribe(data => {
      this.available = data;
    });

		this.getObjectService.findOne("service","inactif","findByStatus").subscribe(data => {
      this.selected = data;
    });
  }

	ngOnInit() {
    this.freshList()
	}

	dragStart(service: Service) {
		this.currentlyDragging = service;
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
      const data ={service:this.currentlyDragging,statusFilter:"inactif"}
    this.getObjectService.updateDataObject("service","updateStatus",data).subscribe(updatedService => {
      console.log(' mis à jour:', updatedService);
    }, error => {
      console.error('Erreur lors de la mise à jour :', error);
    });
			this.available = this.available.filter(
				(val, i) => i != currentlyDraggingIndex
			);
			this.currentlyDragging = null;
		}
	}

	findIndex(service: Service) {
		let index = -1;
		for (let i = 0; i < this.available.length; i++) {
			if (service.id === this.available[i].id) {
				index = i;
				break;
			}
		}
		return index;
	}
  inactifToActif(myservice: any) {
    this.available = [...this.available, myservice];
    this.selected = this.selected.filter((p) => {p.id !== myservice.id;
      console.log("id: ",p.id)});
    const data ={service:myservice,statusFilter:"actif"}
    this.getObjectService.updateDataObject("service","updateStatus",data).subscribe(updatedService => {
      this.freshList()
      console.log(' mis à jour:', updatedService);
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

  name:any;
  price:any;
  duration:any;
  commission:any;
  serviceModif:any = null;
  id: any;
  showDialog(service:any) {
      this.visible = true;
      this.serviceModif=service;
      this.name=service.name;
      this.price=service.price;
      this.duration=service.duration;
      this.commission=service.commission;
      this.id=service.id;
      console.log(this.serviceModif);
  }

  onModif(){
    const service = {
      id:this.id,
      name:this.name,
      price:this.price,
      duration:this.duration,
      commission:this.commission,
    }
    console.log("modif: ",service)
    this.getObjectService.updateDataObject("service","updateService",service).subscribe(updatedService => {
      console.log(' mis à jour:', updatedService);
    }, error => {
      console.error('Erreur lors de la mise à jour :', error);
    });
  }
}
