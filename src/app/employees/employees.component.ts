import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Beer } from '../beer';
import { BEERS } from '../mock-beers';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  btnText: string = 'Enter a beer';
  beers = BEERS;
  beerID: number;
  beerName: string;
  beerBrewery: string;
  beerABV: number;
  beerPrice: number;
  beerSize: number;
  itemCount: number;
  selectedBeer: Beer;
  beerMenu = [];

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    let beerTempArray = [];
    // console.log(this.beerID this.beerName this.beerBrewery this.beerPrice this.beerABV this.beerSize);
    beerTempArray.push(this.beerID);
    beerTempArray.push(this.beerName);
    beerTempArray.push(this.beerBrewery);
    beerTempArray.push(this.beerPrice);
    beerTempArray.push(this.beerABV);
    beerTempArray.push(this.beerSize);
    this.beerMenu.push(beerTempArray);
    console.log(beerTempArray);
    // this.goalText = '';
    this.itemCount = this.beerMenu.length;
  }

}
