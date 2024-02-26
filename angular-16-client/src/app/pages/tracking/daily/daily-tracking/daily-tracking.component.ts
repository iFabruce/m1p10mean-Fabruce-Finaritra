import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';
@Component({
  selector: 'app-tracking',
  templateUrl: './daily-tracking.component.html',
  styleUrls: ['./daily-tracking.component.css']
})
export class DailyTrackingComponent implements OnInit{
  dataDaily: any;
  list: any;
  options: any;
  constructor(private managerService: ManagerService){
    this.list=[]
  }
  ngOnInit() {
    this.managerService.getDailyAppointmentNumber().subscribe(
      (data: any) => {
        for(var i=0; i<=6;i++) {
          data.forEach((element: any)=>{
            if(element.dayOfWeek == i){
              this.list.push(element.total)
            }
            // else{
            //   this.list.push(0)
            // }
          })
        }
        this.dataDaily = {
          labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
          datasets: [
              {
                  label: 'Nombre de réservation',
                  data: this.list,
                  backgroundColor: [
                    'rgb(75, 192, 192)', 
                    
                  ],
                  fill: false,
                  // borderColor: documentStyle.getPropertyValue('--yellow-200'),
                  tension: 0.4
              }
          ]
      };
      }
      )
      
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
  
     
  
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
