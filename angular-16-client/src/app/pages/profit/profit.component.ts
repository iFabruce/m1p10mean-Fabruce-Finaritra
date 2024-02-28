import { ChangeDetectorRef, Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { GetObjectService } from './../../services/getObject.service';

@Component({
  selector: 'app-profit',
  templateUrl: './profit.component.html',
  styleUrls: ['./profit.component.scss'],
})
export class ProfitComponent {
  salaire: any;
  loyer: any;
  piece: any;
  autres: any;
  total: any;
  depenses: any;
  mois = 4;
  annee = 2024;

  constructor(private getObjectService: GetObjectService,private cdr: ChangeDetectorRef) {}

  refreshData() {
    const salaire$ = this.getObjectService.findOne(
      'spent',
      `${this.mois}/${this.annee}/salaire`,
      'findOne'
    );
    const loyer$ = this.getObjectService.findOne(
      'spent',
      `${this.mois}/${this.annee}/loyer`,
      'findOne'
    );
    const piece$ = this.getObjectService.findOne(
      'spent',
      `${this.mois}/${this.annee}/achat pièce`,
      'findOne'
    );
    const autres$ = this.getObjectService.findOne(
      'spent',
      `${this.mois}/${this.annee}/autres`,
      'findOne'
    );
    const total$ = this.getObjectService.findOne(
      'spent',
      `${this.mois}/${this.annee}`,
      'calculateTotalPrice'
    );
    console.log(autres$);
    forkJoin([salaire$, loyer$, piece$, autres$, total$]).subscribe(
      ([salaire, loyer, piece, autres, total]) => {
        this.salaire = salaire[0]?.price;
        this.loyer = loyer[0]?.price;
        this.piece = piece[0]?.price;
        this.autres = autres[0]?.price;
        this.total = total.totalPrice;

        this.depenses = [
          { nom: 'Salaire', value: this.salaire ?? 0, id: salaire[0].id },
          { nom: 'Loyer', value: this.loyer ?? 0, id: loyer[0].id },
          { nom: 'Achat Pièce', value: this.piece ?? 0, id: piece[0].id },
          { nom: 'Autres', value: this.autres ?? 0, id: autres[0]?.id ?? ''},
          { nom: 'Total Dépense', value: this.total },
        ];

        console.log(this.depenses);
      }
    );
  }

  visibleModif: boolean = false;
  visibleAdd: boolean = false;

  inputPrice: any = 0;

  depenseSelected: any;
  price:any = 0;

  butt(depense: any) {
    this.depenseSelected = depense;
    this.price = depense.value;
    console.log(this.depenseSelected);
    this.cdr.detectChanges();
    if (depense.value) {
      console.log('modif');
      this.visibleModif = true;
    } else {
      console.log('add');
      this.visibleAdd = true;
    }
  }

  add() {
    const spent = {
      type: this.depenseSelected.nom.toLowerCase(),
      price: this.inputPrice,
      month: this.mois,
      year: this.annee,
    };
    console.log('ADDSPENT', spent);
    this.getObjectService.create('spent', 'create', spent).subscribe(
      (addSpent) => {
        this.refreshData();
        console.log('addd', addSpent);
        this.visibleAdd = false;
      },
      (error) => {
        console.error('Erreur lors de la mise à jour :', error);
      }
    );
  }

  modif() {
    const spent = {
      id: this.depenseSelected.id,
      type: this.depenseSelected.type,
      price: this.inputPrice,
      month: this.mois,
      year: this.annee,
    };
    this.getObjectService.updateDataObject('spent', 'update', spent).subscribe(
      (updatedSpent) => {
        console.log(updatedSpent);
        this.refreshData();
        this.visibleModif = false;
      },
      (error) => {
        console.error('Erreur lors de la mise à jour :', error);
      }
    );
  }
  ngOnInit() {
    this.refreshData();
  }
}