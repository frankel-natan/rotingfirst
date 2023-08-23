import { Component, OnInit } from '@angular/core';
//import { ApiService } from 'src/app/service/api.service';
import { csharp } from '../../models/csharpInterfice'
import { ApicService } from 'src/app/service/apic.service';

@Component({
  selector: 'app-apicsharp',
  templateUrl: './apicsharp.component.html',
  styleUrls: ['./apicsharp.component.scss']
})
export class ApicsharpComponent implements OnInit {

  constructor(private apic: ApicService) { }
  public nn: csharp[]=[]
  ngOnInit(): void {
    this.apic.getall().subscribe((d) => {
      this.nn=d;
      console.log(d);
    });


  }


}
