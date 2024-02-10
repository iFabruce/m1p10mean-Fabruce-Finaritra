import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  username: string="";
  password: string="";

  data: any[] = [];

  token:any ="";

  profil: any[] | undefined;

  selectedProfil: any | undefined;

    
  constructor(private tutorialService: TutorialService, private authService: AuthService) {}
  ngOnInit(): void {
    this.getAll();
  }
  getAll(): void {
    this.tutorialService.getAll().subscribe(
      (data: any[]) => {
         this.data= data;
      },
      (error:any) => {
        console.error(error);
      }
    );

    this.profil = [
      { name: 'Client' },
      { name: 'Employé' },
      { name: 'Manager' },
    
  ];
  }

  signIn(): void{
    this.authService.signIn(this.username,this.password).subscribe(
      (data: any) => {
        console.log(data)
        this.token = data
      }
    )
  }
}

