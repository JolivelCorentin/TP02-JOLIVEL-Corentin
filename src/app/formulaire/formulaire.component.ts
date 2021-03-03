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

  verification : boolean = false;

  affichageVerif : string;
  affichageVerifMdp : string;

  verifFormulaire()
  {     
    if(this.nom == null || this.prenom == null || this.email == null || this.password == null  || this.confirmationPassword == null || this.adresse == null || this.ville == null)
    {
      this.verification = false;
    }
    else
    {
      this.verification = true;
    }

    if(this.verification == true)
    {
        this.affichageVerif = "Données validées ! Vous pouvez consulter le récapitulatif !";
    }
    else
    {
      this.affichageVerif = "Tous les champs ne sont pas remplis !";
    }

    if(this.password == this.confirmationPassword)
    {
      this.affichageVerifMdp = "";
    }
    else
    {
      this.affichageVerifMdp = "Les mots de passe entrés ne sont pas similaires !";
    }
  }


  ngOnInit(): void {
  }

}
