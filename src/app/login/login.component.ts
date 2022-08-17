import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading:boolean=false;
  errorMessage:string='';
  loginForm:FormGroup=new FormGroup({

    email:new FormControl(null , [Validators.required , Validators.email]),
    password:new FormControl(null , [Validators.required , Validators.pattern('^[A-Z][a-z]{3,8}$')]),
  })
  submitLoginForm(loginForm:FormGroup)
  {
    console.log(loginForm.value);
    this.isLoading=true;
    if(loginForm.valid)
  {
    this._AuthService.signin(this.loginForm.value).subscribe({
      next:(response)=>{
        if(response.message==="success")
        {
          this.isLoading=false;
          localStorage.setItem('userToken',response.token);
          this._AuthService.saveUserData();
          this._Router.navigate(['/home']);
        }
        else
        {
          this.errorMessage=response._message;
          this.isLoading=false;

        }
      }
    })
  }

  }
  constructor(private _AuthService:AuthService, private _Router:Router )

    {

  }


  ngOnInit(): void {
  }

}
