import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { CardsComponent } from "../../cards/cards.component";
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-states',
  imports: [CardsComponent],
  templateUrl: './states.component.html',
  styleUrl: './states.component.scss'
})
export class StatesComponent {
  constructor(public api:ApiService){}
}
