import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { FruitsCardsComponent } from './components/fruits-cards/fruits-cards.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ResponseInterceptor} from "./interceptors/response.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    FruitsCardsComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
