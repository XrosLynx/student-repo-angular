import {Component} from '@angular/core';

@Component({
  template: `
  <h1 class="error-message">Error 404</h1>
  <h6 align="center">Record Not Found</h6>
  `,
  styles:[`
  .error-message{
    margin-top: 150px;
    font-size: 150px;
    text-align: center;
    }
  `]
})

export class Error404Component{

}