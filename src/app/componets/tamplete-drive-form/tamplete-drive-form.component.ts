import { Component, OnInit,ViewChild } from '@angular/core';
import { ServicenatanoneService } from '../../service/servicenatanone.service';

@Component({
  selector: 'app-tamplete-drive-form',
  templateUrl: './tamplete-drive-form.component.html',
  styleUrls: ['./tamplete-drive-form.component.scss']
})
export class TampleteDriveFormComponent implements OnInit {

  @ViewChild('f') form: any;

  constructor(private vc:ServicenatanoneService) { }

  public lange:string[]=["עברית","אנגלית","ערבית","סינית"]

  ngOnInit(): void {
    console.log(this.vc.random);
    this.vc.red();
  }
  public subfom(): void{
    if (this.form.valid) {
      console.log('הצליח!!!');
      console.log(this.form.valid)
      console.log(this.form);
      var a: string = this.form.form.controls.tzipi.controls.libi;
      console.log(a +'jhggb');
    }
    else {
      console.log('eror');
    }
  }

}
