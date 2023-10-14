import { Component } from '@angular/core';
import { DataService } from '../_services/data.service'
import { Router } from '@angular/router';
import { SharedDataService } from '../_services/shared-data.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  user:User = {email:'',password:''};

  constructor(private ds:DataService, 
    private router: Router,
    private sharedDataService:SharedDataService) { }

  ngOnInit(): void {
  }

  onSubmit(){  
    this.ds.checkLogin(this.user).subscribe({
      next:(response:any)=>{       
        if(response.token){
          alert(response.message);
        this.sharedDataService.LoggedIn(true);
        this.ds.setToken(response.token);
        //this.sharedDataService.login();
        this.router.navigate(['./bindings']);

        }
        
      },
      error:(err:any)=>alert(err)
    })
   
  }

}
