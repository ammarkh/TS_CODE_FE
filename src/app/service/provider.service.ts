import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponse } from '../util/ApiResponse';
import { URL } from '../util/ApiRoute';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  private readonly PROVIDER_URL: string = URL + "/provider";
  constructor(private http: HttpClient) { }


  getproviderServices(providerId: number) {
    return this.http.get<APIResponse>
      (this.PROVIDER_URL + "/services/" + providerId);
  }

  addProvider(username: string, password: string) {
    return this.http.post<APIResponse>(this.PROVIDER_URL + "/register",
      { username: username, password: password });
  }

  singinProvider(username: string, password: string) {
    return this.http.post<APIResponse>
      (this.PROVIDER_URL, { username: username, password: password });
  }
}
