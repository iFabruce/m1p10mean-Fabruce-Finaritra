import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  fullname: any | undefined;
  username: any | undefined;
  password1: any | undefined;
  password2: any | undefined;

  constructor(private router: Router, private authService: AuthService){}

  signUp(): void {
    this.authService.signUp(this.username, this.password1, this.fullname).subscribe(
      () => {
          this.router.navigate(['/signin'])
      }
    )
  }
}
