import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm? : FormGroup

  constructor() { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      fruitName : new FormControl('')
    })
  }

  onSubmit() {

  }
}