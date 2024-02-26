import { Component } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-chiffre-affaire-monthly',
  templateUrl: './chiffre-affaire-monthly.component.html',
  styleUrls: ['./chiffre-affaire-monthly.component.css']
})
export class ChiffreAffaireMonthlyComponent {
  dataMonthlyCa: any;
  list: any;
  nb: any
  options: any;
  constructor(private managerService: ManagerService){
    this.list=[]
    this.nb = 0
  }
  ngOnInit() {
    this.managerService.getMonthlyCa().subscribe(
      (data: any) => {
        for(var i=0; i<=6;i++) {
          data.forEach((element: any)=>{
            if(element.month == i){
              console.log(`dayofweek: ${element.month} vs i: ${i}`)
              this.list.push(element.total)
            }else{
              this.list.push(0)
            }
          })
        }
        console.log(this.list)
        this.dataMonthlyCa = {
          labels: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'May', 'June', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'],
          datasets: [
              {
                  label: "Chiffre d'affaire (en Ariary)",
                  data: this.list,
                  fill: false,
                  borderColor: documentStyle.getPropertyValue('--pink-200'),
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
