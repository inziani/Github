import { Injectable } from '@angular/core';
import { catchError, count, map, retry } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { User } from '../user-class/user';
import { Repo } from '../rep-class/repo';




@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  user:User;
  repo:Repo;
  public final_repos:[any];
  
  username: string;
  clientid:string;
  clientsecret:string;

  constructor(private httpClient:HttpClient) { 
    this.clientid = environment.CLIENT_ID;
    this.clientsecret = environment.CLIENT_SECRET
    this.user = new User("", "", "","", "", "","","","","");
    this.repo = new Repo("", "");
  }
  userRequest(){
    interface ApiResponse{
      name: string;
      login:string;
      url:string;
      avatar_url:string;
      created_at:string;
      location:string;
      followers:string;
      following:string;
      public_repos;
      public_gists:string;


    }


    interface ApiRepoResponse{
      description:string;
      html_url:string;

    }


}
  
}
