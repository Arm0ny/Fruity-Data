import { Component, OnInit } from '@angular/core';
import {FruityService} from "../../services/fruity.service";
import {FruitInterface} from "../../interfaces/FruityInterface";

@Component({
  selector: 'app-fruits-cards',
  templateUrl: './fruits-cards.component.html',
  styleUrls: ['./fruits-cards.component.css']
})
export class FruitsCardsComponent implements OnInit {

  constructor(private fruityService : FruityService) { }

  fruits? : FruitInterface[]

  ngOnInit(): void {
    this.getFruits()
  }

  getFruits(fruitName = 'all') : void{
    this.fruityService.getFruits(fruitName).subscribe( response => {
      this.fruits = response.map(fruit => ({
        name: fruit.name,
        id : fruit.id,
        nutritions : fruit.nutritions
      }))
    })
  }

}
