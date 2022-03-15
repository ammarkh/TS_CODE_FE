import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clientId !: number;
  clientService: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.clientId = JSON.parse(localStorage.getItem('clientId') || '{}');

    this.getService();
  }

  getService() {
    this.productService.getClientService(this.clientId)
      .subscribe((res) => {
        this.clientService = res.response.body;
      }, (err) => {
        console.log(err);
      })
  }

  cancel(clientServiceId: number) {
    this.productService
      .serviceCanceled(clientServiceId).
      subscribe((res) => {
        if (res.response.body.httpStatus == "OK") {
          window.alert(res.response.body.message);
          window.location.reload();
        }
      }, (err) => {
        console.log(err);
      })
  }

  extend(clientServiceId: number) {
    this.productService
      .serviceExtend(clientServiceId).
      subscribe((res) => {
        console.log(res.response.body.httpStatus);
        if (res.response.body.httpStatus == "OK") {
          window.alert(res.response.body.message);
          window.location.reload();
        }
      }, (err) => {
        console.log(err);
      })
  }

  complete(clientServiceId: number) {
    this.productService
      .serviceCompleted(clientServiceId).
      subscribe((res) => {

        if (res.response.body.httpStatus == "OK") {
          window.alert(res.response.body.message);
          window.location.reload();
        }
      }, (err) => {
        console.log(err);
      })
  }


}
