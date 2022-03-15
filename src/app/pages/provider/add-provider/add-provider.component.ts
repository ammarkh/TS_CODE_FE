import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProviderService } from 'src/app/service/provider.service';

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css']
})
export class AddProviderComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder, private providerService: ProviderService) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],


    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);

      this.registerPorvider(this.validateForm.value['username'],
        this.validateForm.value['password']);
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


  registerPorvider(username: string, password: string) {
    this.providerService.addProvider(username, password)
      .subscribe((res) => {
        window.alert("provider has register successfully");
      }, (err) => {
        if (err.status == 409)
          window.alert("username is already taken");
        console.log(err);
      })
  }

}
