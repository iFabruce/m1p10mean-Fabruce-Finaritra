import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menutop',
  templateUrl: './menutop.component.html',
  styleUrls: ['./menutop.component.scss']
})
export class MenutopComponent {
  constructor(private router: Router){}
  signout(): void{
    localStorage.clear()
    this.router.navigate(['/'])
  }
}
