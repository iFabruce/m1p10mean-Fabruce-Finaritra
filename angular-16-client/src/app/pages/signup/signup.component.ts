import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  name: string | undefined;
  username: string | undefined;
  password1: string | undefined;
  password2: string | undefined;
}
