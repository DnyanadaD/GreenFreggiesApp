import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; //used to handle asnyc requests and responses
import { UserDetails } from '../Models/sign-up.model';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public userService:UserDetails;
readonly APIUrl ="https://localhost:44307/api"
  constructor(private http:HttpClient) { }
  addUserDetails(val:any){
    console.log(val);
    return this.http.post<UserDetails>(this.APIUrl+'/UserDetails/SaveUserDetails',val)

}
}