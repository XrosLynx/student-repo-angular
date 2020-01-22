import {Component, OnInit} from '@angular/core';

@Component({
  template: `
  <div class="container">
  <div class="row">
    <div class="col-md-11">
      <h2>{{student?.name}} </h2>
    </div>
  </div>

  <div class="row">
    <div class="col-md-6">
      <div><strong>Age:</strong> {{student?.age}}</div>
      <div><strong>Address:</strong> {{student?.address}}</div>
      <div><strong>GWA:</strong> {{student?.gwa}}</div>
    </div>
  </div>
</div>
  `
})

export class ProfileComponent{


  ngOnInit(){

  }
}