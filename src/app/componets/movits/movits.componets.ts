import { Component, EventEmitter, Input, Output } from "@angular/core";
import { gunus } from "src/app/models/gunusEnum";
import { Imovis } from "../../models/movisInterfice";



@Component({
  selector: "app-movits",
  templateUrl: './movits.componets.html',
  styleUrls:["./movits.componets.scss"]
})
export class movitsComponents{
  titel = "mozik";
  public kolHay: Imovis={
    name: "nattan",
    price: 12.3,
    raeting: 17,
    craeiteDate: new Date(),
    gunus: gunus.weman
  }
  @Input() movis: Imovis = {
    name: "first",
    price: 0,
    raeting: 0,
    craeiteDate: new Date(),
    gunus: gunus.men
  };
  @Input() ind :number=0

  public chngeprice(event:Event): void{
    this.kolHay.price = 1.5;
    this.kolHay.craeiteDate = new Date("1990-04-15");
    console.log("goooot");
    console.log(event);
  }
  @Output() delnovis = new EventEmitter<number>();
  public ou1(indx: number) {
    console.log(indx);
    this.delnovis.emit(indx);
  }

  func1(parm: number) {

  }

  func2(parm: number | null) {
    if(parm != null)
    this.func1(parm);
  }
  func3(parm: number) {

  }
}

