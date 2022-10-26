import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  filter: string = 'all';

  constructor() { }

  ngOnInit(): void {
  }

  getFruityFilter($event: string) {
    this.filter = $event
  }
}
