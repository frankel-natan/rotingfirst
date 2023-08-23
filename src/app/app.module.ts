import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { movitsComponents } from '../app/componets/movits/movits.componets';
import { Movits2Component } from './componets/movits2/movits2.component';
import { NatanComponent } from './componets/natan/natan.component';
import { ZeaevComponent } from './componets/zeaev/zeaev.component';
import { TampleteDriveFormComponent } from './componets/tamplete-drive-form/tamplete-drive-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostesComponent } from './componets/postes/postes.component';
import { ApicsharpComponent } from './componets/apicsharp/apicsharp.component';
import { FormFirstComponent } from './componets/form-first/form-first.component';




@NgModule({
  declarations: [ AppComponent,movitsComponents, Movits2Component, NatanComponent, ZeaevComponent, TampleteDriveFormComponent, PostesComponent, ApicsharpComponent, FormFirstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent
  ]
})
export class AppModule {

}
