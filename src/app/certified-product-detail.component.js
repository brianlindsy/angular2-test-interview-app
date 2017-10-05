"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var certified_product_service_1 = require("./certified-product.service");
var certified_product_1 = require("./certified-product");
require("rxjs/add/operator/switchMap");
var CertifiedProductDetailComponent = (function () {
    function CertifiedProductDetailComponent(certifiedProductService, route, location) {
        this.certifiedProductService = certifiedProductService;
        this.route = route;
        this.location = location;
    }
    return CertifiedProductDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", certified_product_1.CertifiedProduct)
], CertifiedProductDetailComponent.prototype, "certifiedProduct", void 0);
CertifiedProductDetailComponent = __decorate([
    core_1.Component({
        selector: 'certified-product-detail',
        templateUrl: './certified-product-detail.component.html',
        styleUrls: ['./certified-product-detail.component.css']
    }),
    __metadata("design:paramtypes", [certified_product_service_1.CertifiedProductService,
        router_1.ActivatedRoute,
        common_1.Location])
], CertifiedProductDetailComponent);
exports.CertifiedProductDetailComponent = CertifiedProductDetailComponent;
//# sourceMappingURL=certified-product-detail.component.js.map