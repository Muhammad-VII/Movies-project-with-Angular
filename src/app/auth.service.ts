import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClinet:HttpClient,private _Router:Router) {
    if(localStorage.getItem(`userSession`) != null){
      this.saveCurrentUser();
    }
  }

  currentUser = new BehaviorSubject(null);

  saveCurrentUser(){
    let token:any = localStorage.getItem(`userSession`)
    this.currentUser.next(jwtDecode(token)) 
    console.log(this.currentUser)
  }

  register(finalRegForm:object):Observable<any>
  {
    return this._HttpClinet.post(`https://route-egypt-api.herokuapp.com/signup`, finalRegForm);
  }

  login(finalLoginForm:object):Observable<any>{
    return this._HttpClinet.post(`https://route-egypt-api.herokuapp.com/signin`, finalLoginForm)
  }

  logout()
  {
    this.currentUser.next(null);
    localStorage.removeItem('userSession')
    this._Router.navigate(['/login'])
  }
}
