import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recapitulatif',
  templateUrl: './recapitulatif.component.html',
  styleUrls: ['./recapitulatif.component.css']
})
export class RecapitulatifComponent implements OnInit {

  constructor() { }

  @Input() nom : string = "";
  @Input() prenom : string = "";
  @Input() email : string = "";
  @Input() password : string = "";
  @Input() adresse : string = "";
  @Input() ville : string = "";

  ngOnInit(): void {
  }

}
