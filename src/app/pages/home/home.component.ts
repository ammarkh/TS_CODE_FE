import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listOfProduct: any = [];
  query: string = "";
  constructor(private productService: ProductService, private router: Router) {
    //this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.viewService();
  }

  viewService() {
    this.productService
      .getAvailableService().subscribe((res) => {
        if (Array.isArray(res.response.body))
          this.listOfProduct = res.response.body;
      }, (err) => {
        console.log(err);
      })
  }

  search() {
    console.log(this.query);
    this.productService.search(this.query)
      .subscribe((res) => {
        if (Array.isArray(res.response.body))
          this.listOfProduct = res.response.body;
        else
          this.listOfProduct = [];
      }, (err) => {
        this.listOfProduct = [];
      })

  }

}
