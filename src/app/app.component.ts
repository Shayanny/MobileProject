import { Component } from '@angular/core';
import { IonApp, IonButtons, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonButtons],
})
export class AppComponent {
  constructor() {}

}
