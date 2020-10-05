import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { User } from '../../user-class/user';
import { Repo } from '../../rep-class/repo';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user:User;
  public repo: Repo;
  public clientid:string;
  public clientsecret:string;
  public final_repos:string;


  public profile:string;


  constructor( private profileService: ProfileService, private http:HttpClient){
    this.clientid = environment.CLIENT_ID;
    this.clientsecret = environment.CLIENT_SECRET
    this.profile='inziani'
  }

  public searchUser(){  

  }

  ngOnInit(): void {
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

    // ======

    interface ApiRepoResponse{
      description:string;
      html_url:string;

    }

    // =====


    this.http.get<ApiResponse>('https://api.github.com/users/'+ this.profile +'?clientid=' + this.clientid + '&client_secret=' + this.clientsecret).subscribe(data=>{
      // Succesful API request  clientsecret ;
      this.user = new User(data.name, data.login, data.url, data.avatar_url,data.created_at, data.location,data.followers,data.following, data.public_repos, data.public_gists)
        console.log(data)
      // "https://api.github.com/users/inziani"
      // 'https://api.github.com/users/'+ this.profile +'?clientid=' + this.clientid + '&client_secret=' + this.clientsecret
  }

  ,err=>{
    this.user = new User(
      "invalidname",
      "invalid login",
      "invalidurl",
      "invalidavatar_url", 
      "invalidcreated_at",
      "invalidlocation",
      "invalidfollowing", 
      "invalidpublic_repos",
      "invalidfollowers",
      "invalidpublic_gists")
    console.log("An error occurred")
  })
// ======================repo data========================
  this.http.get<ApiRepoResponse>("https://api.github.com/users/inziani/repos").subscribe(data=>{
    // Succesful API request
    // this.repo = new Repo(data.description, data.html_url)
    this.repo = data
    data=data
    console.log(data)
    // this.final_repos.push(this.repo)
 
}

  ,err=>{
    this.repo = new Repo("invalid description","invalid html_url")
    console.log("An error occurred")
  })
}
}
