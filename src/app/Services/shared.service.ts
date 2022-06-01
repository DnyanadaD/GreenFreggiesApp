import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; //used to handle asnyc requests and responses
@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl ="http://localhost:5000/api"
  constructor(private http:HttpClient) { }
  addUserDetails(val:any){
    console.log(val);
    return this.http.post(this.APIUrl+'/UserDetails/SaveUserDetails',val)
  }
}
