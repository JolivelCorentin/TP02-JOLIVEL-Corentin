import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  constructor() { }

  nom : string;
  prenom : string;
  email : string;
  password : string;
  confirmationPassword : string;
  adresse : string;
  ville : string;

  verification : boolean = true;

  affichageVerif : string;
  affichageVerifMdp : string;

  verifFormulaire()
  {     
    if(this.nom == null || this.prenom == null || this.email == null || this.password == null  || this.confirmationPassword == null || this.adresse == null || this.ville == null)
    {
        this.affichageVerif = "Tous les champs ne sont pas remplis !";
        this.verification = false;
    }
    else
    {
        this.affichageVerif = "Données validées ! Vous pouvez consulter le récapitulatif !";
    }

    if(this.password == this.confirmationPassword)
    {
      this.affichageVerifMdp = "";
    }
    else
    {
      this.affichageVerifMdp = "Les mots de passe entrés ne sont pas similaires !";
      this.verification = false;
    }
  }


  ngOnInit(): void {
  }

}
