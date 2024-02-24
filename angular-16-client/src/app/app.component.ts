import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) { }
  currentRoute: string = '';
  typeuser: any;
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = this.router.url;
        if(this.currentRoute.startsWith("/employe")){
          this.typeuser = "employe";
        }else if(this.currentRoute.startsWith("/manager")){
          this.typeuser = "manager";
        }else{
          this.typeuser = "client";
        }
      }
    });
  }
}
