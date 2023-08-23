import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { csharp } from '../models/csharpInterfice';

@Injectable({
  providedIn: 'root'
})
export class ApicService {

  constructor(private http: HttpClient) { }


  public getall(): Observable<Array<csharp>>{
    const url: string = "https://localhost:44381/api/emploees";
    return this.http.get(url, {}) as Observable<Array<csharp>>;
  }



  public send(data: any) {

    return this.http.post("https://localhost:44381/api/emploees",data);
  }
}
