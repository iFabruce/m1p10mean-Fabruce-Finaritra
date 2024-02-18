import { Component } from '@angular/core';
import { GetObjectService } from './../../services/getObject.service';
@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent {

  constructor(private getObjectService: GetObjectService) {}
  clientId = "65c715fafffd24080e78298d";
  wallet:any;
  value: Number = 0.00 ;
  visible: boolean = false;
  client: any;
  ngOnInit() {
    this.getObjectService.findOne("client",this.clientId,"findOne").subscribe(data => {
      this.wallet = data.wallet;
    });
  }

    showDialog() {
        this.visible = true;
    }
    addWallet() {
      console.log(this.value)
      const data = {price: this.value}
      this.getObjectService.updateData("client","addWallet",this.clientId,data).subscribe(addWallet => {
        console.log(' mis à jour:', addWallet);
        window.location.reload();
      }, error => {
        console.error('Erreur lors de la mise à jour :', error);
      });
      this.visible = false;
    }
}
