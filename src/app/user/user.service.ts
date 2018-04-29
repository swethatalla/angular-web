import { Injectable } from '@angular/core';
import { User } from "./user";
import { Http, Response,Headers, RequestOptions, URLSearchParams } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";



@Injectable()
export class UserService {

  private apiUrl = 'http://localhost:8080/rest-appl-api/users';
  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http) {
    this.  headers = new Headers({ 'Content-Type': 'application/json',
                               'Accept': 'q=0.8;application/json;q=0.9' });
      this.options = new RequestOptions({ headers:this. headers });

  }

  findAll(): Observable<User[]>  {
    return this.http.get(this.apiUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  findById(id: number): Observable<User> {
    let url='http://localhost:8080/rest-appl-api/users/'+id;
      return this.http.get(url)
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  saveUser(user: User): Observable<User> {


    let body = JSON.stringify(user);
      return this.http.post(this.apiUrl,body,this.options)
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteUserById(id: number): Observable<boolean> {
    let url='http://localhost:8080/rest-appl-api/users/'+id;
      return this.http.delete(url)
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  updateUser(user: User): Observable<User> {
    let body = JSON.stringify(user);
      return this.http.put(this.apiUrl,body,this.options)
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
