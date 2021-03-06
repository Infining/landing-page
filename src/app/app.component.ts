/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.css'
  ],
  template: `
    <nav>
      <span>
        <a [routerLink]=" ['./home'] ">
          Home
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./projects'] ">
          Projects
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./experiments'] ">
          Experiments
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./explore'] ">
          Explore
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./about'] ">
          About Me
        </a>
      </span>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>

    <hr />

    <footer>
      Created, edited, and maintained by Nathan Gaul (nathanjgaul@gmail.com)
    </footer>
  `
})
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
