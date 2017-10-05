import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { BusyModule } from '../../node_modules/angular2-busy';
 
import { AppComponent }         from './app.component';
import { CertifiedProductsComponent }      from './certified-products.component';
import { CertifiedProductService }          from './certified-product.service';
 
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BusyModule
  ],
  declarations: [
    AppComponent,
    CertifiedProductsComponent
  ],
  providers: [ CertifiedProductService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
