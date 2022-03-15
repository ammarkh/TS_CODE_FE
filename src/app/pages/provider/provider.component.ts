import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/service/provider.service';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {
  providerId!: number;
  providerProduct: any;
  constructor(private providerService: ProviderService) { }

  ngOnInit(): void {
    this.providerId = JSON.parse(localStorage.getItem('providerId') || '{}');


    this.getProducts();
  }

  getProducts() {
    this.providerService.getproviderServices(this.providerId)
      .subscribe((res) => {
        if (Array.isArray(res.response.body))
          this.providerProduct = res.response.body;
        console.log(res.response.body);
      }, (err) => {
        console.log(err);
      })
  }

}
