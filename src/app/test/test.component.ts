import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div class="section-1">
              <!-- Interoplation -->
              <h1>Interoplation</h1>
              <h3>Hello {{name}}!</h3>
              <h3>2 + 2 = {{2 + 2}}</h3>
              <h3>string catination = {{"String catination " + name}}</h3>
              <h3>name.length = {{name.length}}</h3>
              <h3>name.toUpperCase() = {{name.toUpperCase()}}</h3>
              <h3>greetUsers function = {{greetUsers()}}</h3>
              <h3>CAN'T Assign ex: "a = 2 + 2" in double bracket </h3>
              <h3>window.location.href = {{siteUrl}}</h3>
              <!-- Property Binding -->
              <h1>Property Binding</h1>
              <input [id]="myId" type="text" value="Jim">
              <input [disabled]="isDisable" id="{{myId}}" type="text" value="Jim">
              <!-- Class binding -->
              <h1>Class Binding</h1>
              <h3 class="text-success">Codevolution</h3>
              <h3 [class]="successClass">Codevolution</h3>
              <h3 [class.text-danger]="hasError">Codevolution</h3>
              <h3 [ngClass]="messageClasses">Codevolution</h3>
              <!-- Style Binding -->
              <h1>Style Binding</h1>
              <h3 [style.color]="'orange'">Binding Styles</h3>
              <h3 [style.color]="highlightColor">Binding Styles 2</h3>
              <h3 [ngStyle]="titleStyle">Binding Styles 3</h3>
              <!-- Event Binding -->
              <h1>Event Binding</h1>
              <button (click)="onClick($event)">Greet</button>
              <h3>{{greeting}}</h3>
              <button (click)="greeting = 'Welcome Jim!'">Greeting</button>
              <!-- Template Regerence Variables -->
              <h1>Template Reference Variables</h1>
              <input #myInput type="text">
              <button (click)="logMessage(myInput)">Log</button>
              <!-- Two Way Binding -->
              <h1>Two Way Binding</h1>
              <input [(ngModel)]="name2" type="text"> <!--Import FormsModule to use ngModel in app.module.ts-->
              <h3>{{name2}}</h3>
              <!-- ngIf Directive -->
              <h1>ngIf Directive</h1>
              <h3 *ngIf="displayName; else elseBlock">ngIf</h3>
              <ng-template #elseBlock>
                <h3>Name is Hidden</h3>
              </ng-template>
              <div *ngIf="displayName; then thenBlock; else elseBlock"></div>
              <ng-template #thenBlock>
                <h3>Show</h3>
              </ng-template>
              <ng-template #elseBlock>
                <h3>Hidden</h3>
              </ng-template>
              <!-- ngSwitch Directive -->
              <h1>ngSwitch Directive</h1>
              <div [ngSwitch]="color">
                <div *ngSwitchCase="'red'">You Pick red</div>
                <div *ngSwitchCase="'blue'">You Pick blue</div>
                <div *ngSwitchCase="'green'">You Pick green</div>
                <div *ngSwitchDefault>Pick Again</div>
              </div>
            </div>`,
  styles: [`
    .section-1 h1 {
      color: blue;
    }
    /** Class Binding **/
    .text-success {
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic;
    }
  `]
})
export class TestComponent implements OnInit {

  // Interoplation
  public name = "Jim Vang";
  public siteUrl = window.location.href;

  // Property Binding
  public myId = 'testId';
  public isDisable = true;

  // Class Binding
  public successClass = 'text-success';
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial
  }

  // Style Binding
  public highlightColor = 'purple';
  public titleStyle = {
    color: 'grey',
    fontStyle: 'italic'
  }

  // Event Binding 
  public greeting = '';

  // Two Way Binding 
  public name2 = '';

  // ngIf Directive
  public displayName = false; // change this to true to see ngIf display in the DOM 

  // ngSwtich Directive
  public color = 'red'; // change this to red, blue, or green to display different message for ngSwtich Directive

  constructor() { }

  ngOnInit() {
  }

  greetUsers() {
    return "Hello " + this.name;
  }

  // Event Binding
  onClick(event) {
    console.log(event)
    this.greeting = event.type;
  }

  // Template Reference Variables
  logMessage(value) {
    console.log(value);
  }

}
