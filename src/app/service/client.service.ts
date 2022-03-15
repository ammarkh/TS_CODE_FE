import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponse } from '../util/ApiResponse';
import { URL } from '../util/ApiRoute';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private readonly CLIENT_API: string = URL + "/client";

  constructor(private http: HttpClient) { }

  registerClient(username: string, password: string) {
   return this.http.post<APIResponse>(this.CLIENT_API + "/add",
      { username: username, password: password });
  }
}
