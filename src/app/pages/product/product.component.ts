import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productInfo !: any;
  clientId!: number;
  constructor(private productService: ProductService,
    private activeRoute: ActivatedRoute,
    private route: Router) { }

  ngOnInit(): void {
    var productId = this.activeRoute.snapshot.params['id'];
    this.clientId = JSON.parse(localStorage.getItem('clientId') || '{}');

    this.viewProductInfo(productId);
  }

  viewProductInfo(id: number) {
    this.productService.getProductById(id)
      .subscribe((res) => {
        if (res.response.body)
          this.productInfo = res.response.body;
        console.log(res.response.body);
      }, (err) => {

      })
  }

  buyService(serviceId: number) {
    this.productService.buyService(this.clientId, serviceId)
      .subscribe((res) => {
        if (res.response.body.httpStatus == "CREATED") {
          window.alert(res.response.body.message);
          this.route.navigate(['./client/dashboard']);
        }
      }, (err) => {
        console.log(err);
      })
  }

}
