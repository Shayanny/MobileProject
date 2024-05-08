import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, RouterLinkWithHref , IonButton, FormsModule, RouterOutlet]
})
export class HomePage {

  constructor(private router:Router , private storage: Storage) {}

  openPageTwo(){

    this.router.navigate(['/pagetwo'])
  }

  openSettings(){

    this.router.navigate(['/settings'])

  }

  title: string = "Good Morning" ;
  name: string = ""; 
  
  async  ionViewWillEnter(){

    await this.storage.create();
    this.name = await this.storage.get('name');
  }

  
}
