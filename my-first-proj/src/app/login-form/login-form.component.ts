import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  user = {email:'',password:'',username:'', rememberMe: false};
 

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
  alert("form submitted");
    console.log(this.user);
 
   
  }

}
