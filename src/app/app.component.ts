import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './service/login.service';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marketplace_ui';
  loggedInClient !: boolean;
  loggedInProvider !: boolean;
  registerProvider !: boolean;
  registerClient !: boolean;
  logged !: boolean;
  registered!: boolean;
  yearDate = new Date().getFullYear();

  constructor(private loginService: LoginService, private router: Router,
    private activeRoute: ActivatedRoute) {

    this.loginService.loggedIn.subscribe((value) => {



      this.loggedInProvider = ((localStorage.getItem("providerLoggedIn") == "true"));
      this.loggedInClient = ((localStorage.getItem("clientLoggedIn") == "true"));
      this.logged = this.loggedInClient || this.loggedInProvider;
      console.log(this.logged + "||" + this.registered);
    })

    if (window.location.href.endsWith("/provider/register"))
      this.registerProvider = true;

    if (window.location.href.endsWith("/client/register"))
      this.registerClient = true;

    this.registered = this.registerClient || this.registerProvider;
    //console.log(this.loggedIn + "|" + this.internet);
    // if (!this.loggedInClient && !this.loggedInProvider && !this.registerClient && !this.registerProvider)
    //   this.router.navigateByUrl("/login");

  }

  logout() {
    localStorage.clear();

    this.loginService.loggedIn.next(false);
  }

}



