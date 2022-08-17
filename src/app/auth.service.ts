import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient,private _Router:Router) {
    if(localStorage.getItem('userToken'))
    {
      this.saveUserData();
    }
  }
  userData:any=new BehaviorSubject(null);
  saveUserData()
  {
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken:any = jwtDecode(encodedToken);
    this.userData.next(decodedToken);
    console.log(decodedToken);

  }

  signup(formData:object):Observable<any>
  {
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup',formData)
  }
  signin(formData:object):Observable<any>
  {
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin',formData)
  }
  signOut()
  {
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['/login'])
  }
}
