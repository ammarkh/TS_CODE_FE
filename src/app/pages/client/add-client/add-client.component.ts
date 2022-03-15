import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  validateForm!: FormGroup;
  constructor(private fb: FormBuilder, private clientService: ClientService) { }

  ngOnInit(): void {

    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],


    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);

      this.registerClient(this.validateForm.value['username'],
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


  registerClient(username: string, password: string) {
    this.clientService.registerClient(username, password)
      .subscribe((res) => {
          window.alert("client has register successfully");


      }, (err) => {
        if (err.status == 409)
          window.alert("username is already taken");
        console.log(err);
      })
  }

}
