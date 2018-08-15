import { Component, OnInit } from '@angular/core';
import { Beer } from '../beer';
import { BEERS } from '../mock-beers';

@Component({
  selector: 'app-patrons',
  templateUrl: './patrons.component.html',
  styleUrls: ['./patrons.component.css']
})
export class PatronsComponent implements OnInit {

  beers = BEERS;

  selectedBeer: Beer;

  constructor() { }

  ngOnInit() {
  }

  onSelect(beer: Beer): void {
    this.selectedBeer = beer;
  }

}
