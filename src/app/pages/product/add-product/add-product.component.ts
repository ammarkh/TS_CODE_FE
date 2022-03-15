import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  validateForm!: FormGroup;
  providerId!: number;
  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {

    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      price: [null, [Validators.required]],
      description: [null, [Validators.required]],
      workingTimeInDay: [null, [Validators.required]],
      expiredDate: [null, [Validators.required]],
      required: [null, [Validators.required]],
    });

    this.providerId = JSON.parse(localStorage.getItem('providerId') || '{}');
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      this.saveProduct(this.validateForm.value);

    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  requiredChange(required: boolean): void {
    console.log(required);
  }

  saveProduct(product: any) {
    product['serviceProvider'] = { providerId: this.providerId };
    this.productService.saveProduct(product)
      .subscribe((res) => {
        window.alert("service has been added");
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
      })

  }


}
