import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsArticleService {

  constructor(private httpClient:HttpClient) { 


  }

  getTopHeadLines():Observable<any>{

    return this.httpClient.get(

      `${environment.url_base}top-headlines?country=us&apiKey=${environment.api_key}`
    )
  }

  getArticleByCategory(category: string):Observable<any>{

    return this.httpClient.get(

     `${environment.url_base}top-headlines?country=us&${category}=technology&apiKey=${environment.api_key}`

    )

  }
}
