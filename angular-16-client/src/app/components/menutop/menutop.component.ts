import { Component } from '@angular/core';

@Component({
  selector: 'app-menutop',
  templateUrl: './menutop.component.html',
  styleUrls: ['./menutop.component.scss']
})
export class MenutopComponent {
  signout(){
    console.log("clear")
    console.log(localStorage.getItem('profil'))
    // localStorage.clear()
  }
}
