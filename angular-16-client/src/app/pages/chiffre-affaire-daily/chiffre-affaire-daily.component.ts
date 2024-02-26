import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';
@Component({
  selector: 'app-tracking',
  templateUrl: './chiffre-affaire-daily.component.html',
  styleUrls: ['./chiffre-affaire-daily.component.css']
})
export class ChiffreAffaireDailyComponent implements OnInit{
  dataDailyCa: any;
  list: any;
  nb: any
  options: any;
  constructor(private managerService: ManagerService){
    this.list=[]
    this.nb = 0
  }
  ngOnInit() {
    this.managerService.getDailyCa().subscribe(
      (data: any) => {
        for(var i=0; i<=6;i++) {
          data.forEach((element: any)=>{
            if(element.dayOfWeek == i){
              console.log(`dayofweek: ${element.dayOfWeek} vs i: ${i}`)
              this.list.push(element.total)
              this.nb += 1
              console.log(this.nb)
            }else{
              // this.list.push(0)
            }
          })
        }
        console.log(this.list)
        this.dataDailyCa = {
          labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
          datasets: [
              {
                  label: "Chiffre d'affaire (en Ariary)",
                  data: this.list,
                  fill: false,
                  borderColor: documentStyle.getPropertyValue('--yellow-200'),
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
