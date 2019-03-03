import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 7';
  // Component Interaction
  public myName = 'Component Interaction'; // to send this property to the test component, included it in the opening tag of the selector in app.component.html file
  public message = '';
}
