import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiPostes } from '../models/apiPostes.intrefice';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private apiserver: HttpClient) { }

  public getApi(): Observable<Array<apiPostes>>{
    const url: string = "https://jsonplaceholder.typicode.com/posts";

    return this.apiserver.get(url) as Observable<Array<apiPostes>>;
  }
}
