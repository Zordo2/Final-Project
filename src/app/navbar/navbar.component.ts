import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogin:boolean=false;
  userInfo:any={};
  constructor(private _AuthService:AuthService) { }
  logOut()
  {
    this._AuthService.signOut();
  }
  ngOnInit(): void {
    this._AuthService.userData.subscribe({
      next:()=>
      {
        if(this._AuthService.userData.getValue()!=null)
        {
          this.isLogin=true;
          this.userInfo=this._AuthService.userData
        }
        else
        {
          this.isLogin=false;
        }
      }
    })
  }

}
