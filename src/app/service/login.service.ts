import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { APIResponse } from '../util/ApiResponse';
import { URL } from '../util/ApiRoute';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly API_ENDPOINT: string = URL;

  public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private router: Router) { }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  loginClient(username: string, password: string) {
    return this.http.post<APIResponse>(this.API_ENDPOINT + "/client/signin", { "username": username, "password": password });

  }

  loginProvider(username: string, password: string) {
    return this.http.post<APIResponse>(this.API_ENDPOINT + "/provider/signin", { "username": username, "password": password });

  }


}
