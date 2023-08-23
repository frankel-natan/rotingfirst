import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { gunus } from 'src/app/models/gunusEnum';
import { Imovis } from '../../models/movisInterfice';

@Component({
  selector: 'app-movits2',
  templateUrl: './movits2.component.html',
  styleUrls: ['./movits2.component.scss']
})
export class Movits2Component implements OnInit ,OnChanges, AfterViewInit,OnDestroy{


  furstfunc() :void{
    console.log("פונקציה ראשונה");
  }

  //constructor() { }
  titel = "הקומפוונטה של המערך";

  @Input() arrn = ["natan", "eli", "dudi"];


  public listmovis: Imovis[] = [{
    name: 'moshe',
    price: 12.3,
    raeting: 17,
    craeiteDate: new Date(),
    gunus: gunus.men
  } ,
  {
    name :'itzak',
    price: 7.5,
    raeting: 10,
    craeiteDate: new Date(),
    gunus: gunus.men
  },
  {
    name: 'pninah',
    price: 15.3,
    raeting: 3,
    craeiteDate: new Date(10, 5, 2014),
    gunus: gunus.men
  }
  ]
  public delitam(indx: number): void{
    this.listmovis.splice(indx, 1);
  }

  ngOnInit() :void{

    console.log("Hello world! ng On Init");
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("בדיקה של לייף סייקל פונקציית שינוי.");

  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("הפונקציה השלישית");

  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("פונקציה רביעית");
  }




}
