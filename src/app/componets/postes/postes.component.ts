import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/service/api.service';
import { apiPostes } from '../../models/apiPostes.intrefice';

@Component({
  selector: 'app-postes',
  templateUrl: './postes.component.html',
  styleUrls: ['./postes.component.scss']
})
export class PostesComponent implements OnInit {

  public one: apiPostes | number = 3;
  public tow: apiPostes | number = 5;

  constructor(private apicomponennt: ApiService) { }
  public arrpost: apiPostes[] = [];
  ngOnInit(): void {

    this.apicomponennt.getApi().subscribe((data) => {
      this.arrpost = data;
      console.log(data);
      this.tow = data[1];
    })

    this.apicomponennt.getApi().subscribe({
      next: (d) => {
        console.log(d[0]);
        this.one = d[0].id;
      }

      })
  }

}
