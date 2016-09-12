import { Component, AfterViewInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-facebook-share',
  templateUrl: 'facebook-share.component.html',
  styles: []
})
export class FacebookShareComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    (function(d, s, id) {
	    var js, fjs = d.getElementsByTagName(s)[0];
	    if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.7&appId=585758521585439";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
}
