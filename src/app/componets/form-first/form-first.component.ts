import { Component, OnInit } from '@angular/core';
import{FormsModule}from '@angular/forms'
import { csharp } from 'src/app/models/csharpInterfice';
import { ApicService } from 'src/app/service/apic.service';
@Component({
  selector: 'app-form-first',
  templateUrl: './form-first.component.html',
  styleUrls: ['./form-first.component.scss']
})
export class FormFirstComponent implements OnInit {


  constructor(private apic:ApicService) { };


  ngOnInit(): void {
  }
  apiPost(d:any) {
    //this.apic.send(d).subscribe((dv) => { console.log(dv); });
    console.log(d);
    this.apic.send(d).subscribe((da)=>{console.log(da)});
    console.log(d);
  }

}
