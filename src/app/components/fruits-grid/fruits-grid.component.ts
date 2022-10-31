import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FruityService} from "../../services/fruity.service";
import {FruitInterface} from "../../interfaces/FruityInterface";


@Component({
  selector: 'app-fruits-grid',
  templateUrl: './fruits-grid.component.html',
  styleUrls: ['./fruits-grid.component.css']
})
export class FruitsGridComponent implements OnChanges, OnInit{

  constructor(private fruityService : FruityService) { }

  fruits? : FruitInterface[]
  @Input() filter : string = 'all'
  isClicked: Boolean = false;

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
  onClick(){
    this.isClicked = !this.isClicked
  }

}
