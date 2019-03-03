import { Component, OnInit, NgModule, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

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
              <!-- ngFor Directive -->
              <h1>ngFor Directive</h1>
              <h2>index as i</h2>
              <div *ngFor="let color of colors; index as i">
                <h3>{{i + 1}}. {{color}}</h3>
              </div>
              <h2>first as f</h2>
              <div *ngFor="let color of colors; first as f">
                <h3>{{f}} = {{color}}</h3>
              </div>
              <h2>last as il</h2>
              <div *ngFor="let color of colors; last as l">
                <h3>{{l}} = {{color}}</h3>
              </div>
              <h2>odd as o</h2>
              <div *ngFor="let color of colors; odd as o">
                <h3>{{o}} = {{color}}</h3>
              </div>
              <h2>even as e</h2>
              <div *ngFor="let color of colors; even as e">
                <h3>{{e}} = {{color}}</h3>
              </div>
              <!-- Component Interaction -->
              <h1>Component Interaction : Parent Component to Child Component</h1>
              <h3>{{"Hello " + parentData}}</h3>
              <p>In component interaction, we are sending the data from the parent component to the child component and displaying it in the child compoenet</p>
              <h1>Component Interaction : Child Component to Parent Component, using Events</h1>
              <p>send message to top of the page</p>
              <button (click)="fireEvent()">Send Event</button>
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

  // ngFor Directive
  public colors = ['red', 'blue', 'green', 'yellow'];

  // Component Interaction
  @Input() public parentData; // need away to inform to the test.component, hey this is not a normal property this is an input property and will recieve this vaule from the parent so we use the input decorator
  // Import Input from @angular/core at top of page
  // Can also be written as 
  // @Input('parentData') public myName;

  // Now let's send data from the child component to the parent component using Event
  @Output() public childEvent = new EventEmitter(); // Import EventEmitter and Output from @angular/core

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

  // Component Interaction
  fireEvent() {
    this.childEvent.emit('Hey Child Event');
  }

}
