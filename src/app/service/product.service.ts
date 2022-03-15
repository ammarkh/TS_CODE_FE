import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponse } from '../util/ApiResponse';
import { URL } from './../util/ApiRoute';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly SERVICE_URL: String = URL + "/service";
  private readonly CLIENT_URL: String = URL + "/client"
  constructor(private http: HttpClient) { }

  getAvailableService() {
    return this.http.get<APIResponse>(this.SERVICE_URL + "/catalog")
  }

  getProductById(id: number) {
    return this.http.get<APIResponse>(this.SERVICE_URL + "/" + id)
  }

  getClientService(clientId: number) {
    return this.http.get<APIResponse>(this.CLIENT_URL + "/service/" + clientId);
  }

  serviceCanceled(clientServiceId: number) {
    return this.http.put<APIResponse>
      (this.CLIENT_URL + "/service/canceled/" + clientServiceId,
        null);
  }

  serviceExtend(clientServiceId: number) {
    return this.http.put<APIResponse>
      (this.CLIENT_URL + "/service/extend/" + clientServiceId,
        null);
  }

  serviceCompleted(clientServiceId: number) {
    return this.http.put<APIResponse>
      (this.SERVICE_URL + "/complete/" + clientServiceId,
        null);
  }

  buyService(clientId: number, serviceId: number) {
    return this.http.post<APIResponse>(this.SERVICE_URL + "/buy", {
      service: { serviceId: serviceId },
      client: { clientId: clientId }
    })
  }

  search(q: string) {
    return this.http.get<APIResponse>(this.SERVICE_URL + "/search?q=" + q);
  }

  saveProduct(product: any) {

    return this.http.post<APIResponse>(this.SERVICE_URL + "/add", product);
  }
}
