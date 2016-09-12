import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-header-image',
  template: `
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-offset-2 col-md-8">
          <img src="image/Movies.jpg" class="img-responsive" />
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class HeaderImageComponent {

  constructor() { }
}
