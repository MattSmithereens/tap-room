import { Component, OnInit, Input } from '@angular/core';
import { Beer } from '../beer';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {

  @Input() beer: Beer;

  constructor() { }

  ngOnInit() {
  }

}
