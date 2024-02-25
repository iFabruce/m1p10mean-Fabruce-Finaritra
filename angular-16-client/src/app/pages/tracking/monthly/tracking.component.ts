import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit{
  data: any;
  list: any | undefined;
  options: any;
  constructor(private managerService: ManagerService){
    this.list=[]
  }
  ngOnInit() {
    this.managerService.getMonthlyAppointmentNumber().subscribe(
      (data: any) => {
        for(var i=1; i<=12;i++) {
          data.forEach((element: any)=>{
            console.log("month:"+element.month+" vs i:"+i)
            if(element.month == i){
              this.list.push(element.total)
            }else{
              this.list.push(0)
            }
          })
        }
      }
      )
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
  
      this.data = {
          labels: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'May', 'June', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'],
          datasets: [
              {
                  label: 'Nombre de réservation',
                  data: this.list,
                  fill: false,
                  borderColor: documentStyle.getPropertyValue('--yellow-200'),
                  tension: 0.4
              }
          ]
      };
  
      this.options = {
          maintainAspectRatio: false,
          aspectRatio: 0.6,
          plugins: {
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          },
          scales: {
              x: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              },
              y: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              }
          }
      };

  }
}
