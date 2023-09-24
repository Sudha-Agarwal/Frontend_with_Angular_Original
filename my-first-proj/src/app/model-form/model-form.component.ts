import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent {
  emailPattern = '^[a-zA-z0-9._]+@[a-zA-z0-9.-]+\\.[a-z]{2,4}$';



  RegisterationForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('',[Validators.required, 
      Validators.pattern(this.emailPattern)]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)])
  });

  get f(){
    return this.RegisterationForm.controls;
  }

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.table(this.RegisterationForm.value);
    
  }

  emailDomainValidator(control:FormControl){
    let email = control.value;
    if(email && email.indexOf("@")!= -1){
      let[_, domain] = email.split("@");
      if(domain !== "gmail.com"){
        return {
          emailDomain:{
            parsedDomain:domain
          }
        }
      }      
    }
    return null;
  }

}
