import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaginateResponse, Response, User } from '../interfaces/users.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _http:HttpClient    = inject(HttpClient);
  private BASE_API_URL:string = 'https://reqres.in/api';

  getById( id:number ):Observable<Response<User>> {
    return this._http.get<PaginateResponse<User>>(`${this.BASE_API_URL}/users/${id}`);
  }

  getAllByPaginate( pageNumber:number ):Observable<PaginateResponse<User>> {
    return this._http.get<PaginateResponse<User>>(`${this.BASE_API_URL}/users?page=${pageNumber}`);
  }

}
