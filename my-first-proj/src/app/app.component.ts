import { Component, OnInit } from '@angular/core';
import { SharedDataService } from './_services/shared-data.service';
import { Router } from '@angular/router';
import { DataService } from './_services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-first-proj';
  isLoggedIn:boolean;
  isLoggedOut:boolean;
  loginFromService:boolean;
  logoutFromService:boolean;


  constructor(private sharedDataService:SharedDataService,
    private router:Router,
    private ds:DataService){}

  dropdownItems = [
    { text: 'Mobiles', routerLink: 'products', queryParams: { category: 'mobile' } },
    { text: 'Laptops', routerLink: 'products', queryParams: { category: 'laptop' } },
    { text: 'Furnitures', routerLink: 'products', queryParams: { category: 'furniture' } },
  ];

  ngOnInit(): void {
    this.sharedDataService.isLoggedIn$.subscribe(dataSubjectLogin=>{
      this.isLoggedIn = dataSubjectLogin;
      this.isLoggedOut = !dataSubjectLogin;    
    });

    this.loginFromService = this.sharedDataService.getLogin();
    this.logoutFromService = !this.sharedDataService.getLogin();

    alert(this.loginFromService);
    }

    logout(){
      alert("you will be logged out");
      this.sharedDataService.LoggedOut(false);
      this.ds.deleteToken();
      this.router.navigate(['/login-form']);

    }
  
  }


