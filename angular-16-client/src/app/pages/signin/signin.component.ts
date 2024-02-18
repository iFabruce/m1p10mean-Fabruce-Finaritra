import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  username: string="";
  password: string="";
  selectedProfil: string = ""
  erreurLogin: string | null = null;

  data: any[] = [];

  token:any ="";

  profil:any = [
    { name: 'Client' },
    { name: 'Employé' },
    { name: 'Manager' },
  ];

  constructor(private router: Router, private tutorialService: TutorialService, private authService: AuthService) {}
  ngOnInit(): void {

  }

  signIn(): void{
    console.log("click")
    this.authService.signIn(this.username,this.password, this.selectedProfil).subscribe(
      (data: any) => {
        console.log(data)
        localStorage.setItem('token', data.token)
        localStorage.setItem('profil', data.token)

        if(data.type == "Client"){
          this.router.navigate(['/appointment']);
        }else if(data.type == "Employé"){
          console.log(data.type)
          // this.router.navigate(['/EmployeeAppointement']);
        }else{
          console.log(data.type)
          // this.router.navigate(['/EmployeeManagement']);
        }
      },(error: any) => {
        console.log(error.message);
        this.erreurLogin = "Veuillez verifier votre identifiant et votre mot de passe"
      }
    )
  }
}
