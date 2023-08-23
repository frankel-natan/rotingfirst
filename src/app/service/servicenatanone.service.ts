import { Injectable } from '@angular/core';
import { Ichilde } from '../models/child.interfice';
import { gunus } from '../models/gunusEnum';

@Injectable({
  providedIn: 'root'
})
export class ServicenatanoneService {

  public random: number = Math.floor(Math.random() * 100);

  constructor() { }

  private han: Ichilde[]=[
    {
      name: 'meairfrankel',
      age: 2,
      id: '201455554',
      craeiteDate: new Date(),
      gunus: gunus.men

    }];

  public red(): void{
    console.log('88 ---',Math.floor(Math.random() * 100),'--- 99');
  }

  public getna(): Ichilde[]{
    return this.han
  }
  public setna(x: Ichilde[]): void{
    this.han = [...this.han, ...x];
    console.log("****",this.han)
  }
}
