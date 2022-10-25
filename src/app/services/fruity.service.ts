import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {FruitInterface} from "../interfaces/FruityInterface";

@Injectable({
  providedIn: 'root'
})
export class FruityService {
  private url = 'https://limitless-wave-57443.herokuapp.com/https://fruityvice.com/api/fruit/'

  constructor(private http : HttpClient) { }

  getFruits(fruit = 'all'): Observable<FruitInterface[]>{
    return this.http.get<FruitInterface[]>(`${this.url}${fruit}`)
  }
}
