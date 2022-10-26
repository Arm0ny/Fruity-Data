import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm? : FormGroup
  @Output() fruityFilter = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      fruitName : new FormControl('')
    })
  }

  onSubmit() : void {
    let fruit = this.searchForm?.get('fruitName')?.value
    this.fruityFilter.emit(fruit)
    console.log(fruit)
  }

}
