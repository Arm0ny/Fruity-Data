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
  @Input() filter : string = ''

  ngOnChanges(changes: SimpleChanges) {
    if (this.filter){
      this.getSelectedFruit(this.filter)
    }else{
      this.getFruits()
    }
  }

  ngOnInit(){
    this.getFruits()
}

  getFruits() : void{
    this.fruityService.getFruits().subscribe( response => {

      this.fruits = response.map(fruit => ({
        name: fruit.name,
        id : fruit.id,
        nutritions : fruit.nutritions
      }))
    })
  }

  getSelectedFruit(filter : string){
    this.fruityService.getSelectedFruit(filter).subscribe(response => {
      this.fruits = [response]
    })
  }
}
