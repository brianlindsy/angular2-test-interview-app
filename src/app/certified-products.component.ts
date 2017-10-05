import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
import { CertifiedProduct } from './certified-product';
import { CertifiedProductService } from './certified-product.service';
 
@Component({
  selector: 'my-certified-products',
  templateUrl: './certified-products.component.html',
  styleUrls: ['./certified-products.component.css']
})
export class CertifiedProductsComponent implements OnInit {
  certifiedProducts: CertifiedProduct[];
  selectedCertifiedProduct: CertifiedProduct;
  busy: Promise<any>;
 
  constructor(private certifiedProductService: CertifiedProductService,
              private router: Router) { }
 
  getCertifiedProducts(): void {
    this.busy = this.certifiedProductService.getCertifiedProducts().then(certifiedProducts => this.certifiedProducts = certifiedProducts.slice(0,9));
  }
 
  ngOnInit(): void {
    this.getCertifiedProducts();
  }
 
  onSelect(certifiedProduct: CertifiedProduct): void {
    this.selectedCertifiedProduct = certifiedProduct;
  }
}