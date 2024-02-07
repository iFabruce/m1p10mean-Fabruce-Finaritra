import { Component } from '@angular/core';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.scss']
})
export class HistoricComponent {
  historics=[
    {serviceName:"name1",date:"01-01-2024",price:"prix",nameUser:"nameUser"},
    {serviceName:"name2",date:"01-01-2024",price:"prix",nameUser:"nameUser"},
    {serviceName:"name3",date:"01-01-2024",price:"prix",nameUser:"nameUser"},
    {serviceName:"name4",date:"01-01-2024",price:"prix",nameUser:"nameUser"},
    {serviceName:"name5",date:"01-01-2024",price:"prix",nameUser:"nameUser"},
    {serviceName:"name6",date:"01-01-2024",price:"prix",nameUser:"nameUser"},
    {serviceName:"name7",date:"01-01-2024",price:"prix",nameUser:"nameUser"}
  ]
}
