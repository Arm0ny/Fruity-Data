import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FruityService} from "../../services/fruity.service";
import {FruitInterface} from "../../interfaces/FruityInterface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {

  fruits? : FruitInterface[]
  @Input() filter : string = 'all'


  constructor(private fruityService : FruityService) { }

  ngOnChanges() {
    if (!this.filter){
      this.filter = 'all'
    }
    this.getFruits(this.filter)
    console.log('onChanges')
  }

  ngOnInit(): void {
    this.getFruits()
  }

  getFilteredFruits($event: string) {
    this.filter = $event
    if (!this.filter){
      this.filter = 'all'
    }
    this.getFruits(this.filter)
    console.log('filtered')
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
