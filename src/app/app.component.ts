import { Component } from '@angular/core';

@Component({
  selector: 'student-app',
  template: `
  <app-top-bar></app-top-bar>
  <router-outlet></router-outlet>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {}
