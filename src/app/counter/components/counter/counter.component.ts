// import { Component } from "@angular/core";

// @Component({
//   selector: 'app-counter',
//   template: '<h1>Hola Counter</h1>',
// })
// export class CounterComponent {

// }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>
  Counter: {{counter}}
  </h3>

  <button (click) = "increaseBy(1)" >+1</button>
  <button (click) = "resetCounter(10)" >Reset</button>
  <button (click) = "decreaseBy(1)" >-1</button>
  `,
})

export class CounterComponent {
  counter: number = 10;
  increaseBy(value:number):void {
    this.counter += 1;
  };
  decreaseBy(value:number):void {
    this.counter -= 1;
  };
  resetCounter(value:number):void {
    this.counter = 10
  };

  constructor() {}
}
