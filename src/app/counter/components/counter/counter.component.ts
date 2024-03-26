import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <h2>Counter: {{ counter }}</h2>

        <button (click)="increase(+1)">+1</button>
        <button (click)="resetCounter()">Reset</button>
        <button (click)="increase(-1)">-1</button>
    `
})

export class CounterComponent {
    constructor() { }
    public counter: number = 10;

    increase( value:number ):void {
        this.counter += value; 
      }
      resetCounter():void {
        this.counter = 10;
      }
}