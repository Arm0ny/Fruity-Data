import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HomeComponent} from "./components/home/home.component";
import {SearchComponent} from "./components/search/search.component";
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ResponseInterceptor} from "./interceptors/response.interceptor";
import { FruitCardComponent } from './components/fruit-card/fruit-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgCircleProgressModule} from "ng-circle-progress";
import {HttpErrorInterceptor} from "./interceptors/http-error.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    FruitCardComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    NgCircleProgressModule.forRoot({
      lazy: true,
      radius: 10,
      outerStrokeWidth: 1,
      innerStrokeWidth: 0.5,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      responsive: true,
      titleFontSize: "1.5",
      subtitleFontSize: "1.5",
      unitsFontSize: "1",
      units: "g",
      subtitleColor: "#000000"
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
