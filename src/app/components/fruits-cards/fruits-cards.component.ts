import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FruityService} from "../../services/fruity.service";
import {FruitInterface} from "../../interfaces/FruityInterface";


@Component({
  selector: 'app-fruits-cards',
  templateUrl: './fruits-cards.component.html',
  styleUrls: ['./fruits-cards.component.css']
})
export class FruitsCardsComponent implements OnChanges, OnInit{

  constructor(private fruityService : FruityService) { }

  fruits? : FruitInterface[]
  @Input() filter : string = 'all'

  ngOnChanges(changes: SimpleChanges) {
    if (!this.filter){
      this.filter = 'all'
    }
    this.getFruits(this.filter)
  }

  ngOnInit(){
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
