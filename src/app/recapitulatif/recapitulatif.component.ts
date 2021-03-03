import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recapitulatif',
  templateUrl: './recapitulatif.component.html',
  styleUrls: ['./recapitulatif.component.css']
})
export class RecapitulatifComponent implements OnInit {

  constructor() { }

  nom : string = "";
  prenom : string = "";
  email : string = "";
  password : string = "";
  adresse : string = "";
  ville : string = "";
  
  ngOnInit(): void {
  }

}
