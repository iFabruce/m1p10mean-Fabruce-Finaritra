import { Component } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent {
  value: number = 0.00;
  visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
}
