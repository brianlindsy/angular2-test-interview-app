import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { CertifiedProduct } from './certified-product';

@Injectable()
export class CertifiedProductService {
  private cpUrl = 'https://chpl.ahrqstg.org/rest/certified_products';  // URL to dev CHPL API
  private apiKey = '12909a978483dfb8ecd0596c98ae9094';
  private headers = new Headers({'API-Key': this.apiKey});
  
  constructor(private http: Http) { }
 
  getCertifiedProducts(): Promise<CertifiedProduct[]> {
    return this.http.get(this.cpUrl, {headers: this.headers})
             .toPromise()
             .then(response => response.json() as CertifiedProduct[])
             .catch(this.handleError);
  }
 
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}