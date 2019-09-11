import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OwnerService {

  constructor(private http: HttpClient) {}
  getOwners(){
    return this.http.get('http://localhost:9966/petclinic/api/owners');
  }
}
