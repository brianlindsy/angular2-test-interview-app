import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { CertifiedProductService } from './certified-product.service';
import { CertifiedProduct } from './certified-product'
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'certified-product-detail',
  templateUrl: './certified-product-detail.component.html',
  styleUrls: ['./certified-product-detail.component.css']
})
export class CertifiedProductDetailComponent {
	@Input() certifiedProduct: CertifiedProduct;
	constructor(
  		private certifiedProductService: CertifiedProductService,
  		private route: ActivatedRoute,
  		private location: Location
	) {}
}