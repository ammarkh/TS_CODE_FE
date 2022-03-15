import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validateForm!: FormGroup;
  type!: number;
  constructor(private fb: FormBuilder, private loginService: LoginService,
    private activeRoute: ActivatedRoute, private router: Router) { }

  submitForm(): void {
    console.log('submit', this.validateForm.value);

    this.signIn(this.validateForm.value['userName'], this.validateForm.value['password'], this.type);
  }

  changeType(type: number) {
    this.type = type;
  }


  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });


  }



  signIn(username: string, password: string, type: number) {
    if (this.type == 1)
      this.loginService.loginClient(username, password)
        .subscribe((res) => {
          let client = res.response.body;
          localStorage.setItem("clientLoggedIn", "true");
          localStorage.setItem("clientId", client.clientId);
          this.loginService.loggedIn.next(true);
          this.router.navigateByUrl("/");
        }, (err) => {
          window.alert(err.error.response.body.message);
        })

    else if (type == 2) {
      this.loginService.loginProvider(username, password)
        .subscribe((res) => {
          let provider = res.response.body;
          localStorage.clear();
          localStorage.setItem("providerLoggedIn", "true");
          localStorage.setItem("providerId", provider.providerId);
          this.loginService.loggedIn.next(true);
          this.router.navigateByUrl("/provider/dashboard");
        }, (err) => {
          window.alert(err.error.response.body.message);
        })
    }
  }

}
