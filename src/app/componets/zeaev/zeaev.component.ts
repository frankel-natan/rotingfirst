import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ichilde } from 'src/app/models/child.interfice';
import { gunus } from 'src/app/models/gunusEnum';

@Component({
  selector: 'app-zeaev',
  templateUrl: './zeaev.component.html',
  styleUrls: ['./zeaev.component.scss']
})
export class ZeaevComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  famly = 'FRANKEL';
  @Input() num: number = 0;
  @Input() indexn: number = 0;
  @Input() lisrchil: Ichilde = {
    name: 'Natan',
    age: 12,
    id: '201478654',
    craeiteDate: new Date(),
    gunus: gunus.weman
  }

  public listChildbig: Ichilde[] = [{
    name: 'Natan',
    age: 12,
    id: '201478654',
    craeiteDate: new Date(),
    gunus: gunus.weman
  },
    {
      name: 'Yeoshoaha',
      age: 9,
      id: '208527419',
      craeiteDate: new Date(),
      gunus: gunus.men
    }]
  get valenum() {
    return gunus
  }

  @Output() delEvent: EventEmitter<number> = new EventEmitter();

  public del(x: number): void{
    console.log(x);
    this.delEvent.emit(this.indexn);
  }
}


