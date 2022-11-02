import {Component, Input, OnInit} from '@angular/core';
import {FruitInterface} from "../../interfaces/FruityInterface";

@Component({
  selector: 'app-fruit-card',
  templateUrl: './fruit-card.component.html',
  styleUrls: ['./fruit-card.component.css']
})
export class FruitCardComponent implements OnInit {
  @Input() fruit?: FruitInterface

  showDetails: Boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick($event : any){
    this.showDetails = !this.showDetails
    let fruitCard : HTMLElement = $event.target
    fruitCard.parentElement?.classList.add('col-span-2')
  }

}
