
import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-working-time',
  templateUrl: './working-time.component.html',
  styleUrls: ['./working-time.component.css']
})
export class WorkingTimeComponent implements OnInit {
    list: any[] | undefined;
    

    constructor(private managerService: ManagerService) {
      this.list = []
    }

    ngOnInit() {
        this.managerService.getWorkingTime().subscribe(
          (data: any) => {
            data.forEach((element: any)=>{
              this.list?.push(element)
            })
          }
        )
      
    }

    clear(table: Table) {
        table.clear();
    }


}