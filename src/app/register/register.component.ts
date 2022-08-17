import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isLoading:boolean=false;
  errorMessage:string='';
  registerForm:FormGroup=new FormGroup({
    first_name:new FormControl(null , [Validators.minLength(3) , Validators.maxLength(10) , Validators.required]),
    last_name:new FormControl(null , [Validators.minLength(3) , Validators.maxLength(10), Validators.required]),
    age:new FormControl(null , [Validators.min(16) , Validators.max(80) , Validators.required]),
    email:new FormControl(null , [Validators.required , Validators.email]),
    password:new FormControl(null , [Validators.required , Validators.pattern('^[A-Z][a-z]{3,8}$')]),
  })
  // submitRegisterForm(registerForm:FormGroup)
  // {
  //   this.isLoading=true;
  //   if(registerForm.valid)
  //   {
  //     this._AuthService.signup(this.registerForm.value).subscribe({
  //       next:(response)=>{
  //         if(response.message === 'success')
  //         {
  //           this.isLoading=false;
  //           this._Router.navigate(['/login'])
  //         }
  //         else
  //         {
  //           this.errorMessage=response.message;
  //           this.isLoading=false;

  //         }
  //       }
  //     })
  //   }

  // }
  submitRegisterForm(registerForm:FormGroup)
  {
    this.isLoading=true;
    if(registerForm.valid)
    {
      this._AuthService.signup(registerForm.value).subscribe({
        next:(response)=>{
          if(response.message==="success")
          {
            this.isLoading=false;
            this._Router.navigate(['/login'])
          }
          else
          {
            this.isLoading=false;
            this.errorMessage=response.message;
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
