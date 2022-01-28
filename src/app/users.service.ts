import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url = 'http://capi-examen-back-alexisjimenez.test/api/users';
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<any>(this.url);
  }
}
