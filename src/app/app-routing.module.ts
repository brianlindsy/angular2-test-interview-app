import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { CertifiedProductsComponent }      from './certified-products.component';
import { CertifiedProductDetailComponent }  from './certified-product-detail.component';
 
const routes: Routes = [
  { path: 'certifiedProducts',     component: CertifiedProductsComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}