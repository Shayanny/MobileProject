import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonHeader, IonLabel, IonList, IonRow, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { NewsArticleService } from '../api/news-article.service';

@Component({
  selector: 'app-pagetwo',
  templateUrl: './pagetwo.page.html',
  styleUrls: ['./pagetwo.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonBackButton, IonButtons, RouterLinkWithHref, RouterOutlet, IonList, IonRow, IonCol, IonLabel] 
})
export class PagetwoPage /*implements OnInit */{

  selectedCategory = "technology";

  topHeadlines : any = []

  constructor(private articleService:NewsArticleService) {
      
    articleService.getTopHeadLines().subscribe((results)=> {

      //console.log(results.articles)
      this.topHeadlines.push(...results.articles)

      console.log(this.topHeadlines);

    } )
    
    articleService.getArticleByCategory(this.selectedCategory).subscribe((results)=>{
      
      //console.log(results);

    })

   }
/*
  ngOnInit() {
  }
*/
}
