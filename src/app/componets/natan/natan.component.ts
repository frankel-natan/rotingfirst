import { Component, Input, OnInit } from '@angular/core';
import { Ichilde } from 'src/app/models/child.interfice';
import { gunus } from 'src/app/models/gunusEnum';
import { ServicenatanoneService } from 'src/app/service/servicenatanone.service';

@Component({
  selector: 'app-natan',
  templateUrl: './natan.component.html',
  styleUrls: ['./natan.component.scss']
})
export class NatanComponent implements OnInit {

  constructor(private nasc:ServicenatanoneService) { }

  ngOnInit(): void {
    console.log(this.nasc.random);
    console.log("---", this.nasc.getna());
    console.log(this.listChild);
    console.log(this.nasc);
    this.nasc.setna(this.listChild);
    console.log(this.listChild);
    console.log(this.nasc);
    this.listChild = this.nasc.getna();
    this.nasc.red();
  }
  @Input() brw: number = 0;
  @Input() izaev: string | undefined;
  public listChild: Ichilde[] = [{
    name: 'dudi',
    age: 12,
    id: '201478654',
    craeiteDate: new Date(),
    gunus: gunus.men
  },
  {
      name: 'eli',
      age: 9,
      id: '208527419',
      craeiteDate: new Date(),
      gunus: gunus.men
    }, {
      name: 'Menachemm',
      age: 6,
      id: '208579458',
      craeiteDate: new Date(),
      gunus: gunus.men
  }, {
    name: 'libbi',
    age: 4,
    id: '207414563',
    craeiteDate: new Date(),
    gunus: gunus.weman
}, {
  name: 'meair',
  age: 2,
  id: '209631754',
  craeiteDate: new Date(),
  gunus: gunus.men
}

  ]
  public del2(indexs: number) :void {
    this.listChild.splice(indexs, 1);

  }

}
