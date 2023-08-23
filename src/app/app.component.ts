import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log('התחלה');
    // this.obNatan.subscribe(bb => { console.log(bb); },
    // err5 => { console.log(err5) },
    //   () => { console.log('ה שלם'); } )
    this.obNatan.subscribe({
      next: v => console.log(v),
      error: e => console.error(e),
      complete: () => console.info('ה שלם')
    });
  }
  title = 'sample-app';
  boll: boolean = true;
  toogelc(): void{
    this.boll = !this.boll;
  }
  public ou2(itam: number) {
    console.log(itam);
  }
  public obNatan: Observable<any> = new Observable((observable2) => {
    observable2.next('start');

    setTimeout(() => {
      observable2.next('start---30000');
    }, 3000);

    setTimeout(() => {
      observable2.complete();
    }, 6000);
  })






}
