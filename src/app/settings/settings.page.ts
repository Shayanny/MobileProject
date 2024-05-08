import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLinkWithHref } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HomePage } from '../home/home.page';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterOutlet, IonButton, RouterLinkWithHref, RouterOutlet, IonButtons, IonBackButton]
})
export class SettingsPage implements OnInit {

  constructor(private router: Router , private storage: Storage){}
 

  name: string = "" ;

  ngOnInit(){
 }

 async ionViewWillEnter(){

  await this.storage.create();
  this.name = await this.storage.get('name');
 }

 async saveName(){
  await this.storage.set('name', this.name)
  
 }
   

}
