import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div class="section-1">
              <h1>Interoplation</h1>
              <h3>Hello {{name}}!</h3>
              <h3>2 + 2 = {{2 + 2}}</h3>
              <h3>string catination = {{"String catination " + name}}</h3>
              <h3>name.length = {{name.length}}</h3>
              <h3>name.toUpperCase() = {{name.toUpperCase()}}</h3>
              <h3>greetUsers function = {{greetUsers()}}</h3>
              <h3>CAN'T Assign ex: "a = 2 + 2" in double bracket </h3>
              <h3>window.location.href = {{siteUrl}}</h3>
            </div>`,
  styles: [`
    .section-1 h1 {
      color: blue;
    }
  `]
})
export class TestComponent implements OnInit {

  public name = "Jim Vang";
  public siteUrl = window.location.href;

  constructor() { }

  ngOnInit() {
  }

  greetUsers() {
    return "Hello " + this.name;
  }

}
