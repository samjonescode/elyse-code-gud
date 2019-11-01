import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { resolve } from 'q';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  forbiddenUsernames = ['Elyse','Sam'];
  constructor(private http: HttpClient,
              // private authService: AuthService
              ) { }

  ngOnInit() {
    this.initializeForm();

    //setValue to set all fields

    // this.loginForm.setValue({
    //   "username": "Sam",
    //   "password": "sam",
    //   "email": "tt@t.c",
    //   "hobbies": null
      
    // })

    //patchValue to set just a few

    // this.loginForm.patchValue({
    //   "username": "Sam"
    // })

    //two observables for closely monitoring 
    // the changes of forms: valueChanges and statusChanges
    
    // console.log("this.loginForm.valueChanges")
    // this.loginForm.valueChanges.subscribe(
    //   value => {
    //     console.log(value)
    // }) 

    //listen to a specific input field...
    // console.log("this.loginForm.controls.username.statusChanges")
    // this.loginForm.controls.username.statusChanges.subscribe(
    //   status => {
    //     console.log(status)
    //   }
    // )

    // console.log("this.loginForm.statusChanges")
    // this.loginForm.statusChanges.subscribe(
    //   status => {
    //     console.log(status)
    //   }
    // )
    
  }

  initializeForm(){
    this.loginForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      'password': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      'hobbies': new FormArray([])
    })
  }

  onSubmit(){
    let loginCredentials = this.loginForm.value;
    console.log(loginCredentials)
    
  }

  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.loginForm.get('hobbies')).push(control);
  }

  //custom validator
  forbiddenNames(control: FormControl): {[s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value)!==-1) {
      return {'nameIsForbidden': true};
    }

    return null;
  }

  //custom async validator
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject)=>{

      setTimeout(()=>{
        if (control.value === "t@t.com"){
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
