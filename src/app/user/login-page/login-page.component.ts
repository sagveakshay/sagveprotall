import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  Login!: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.Login = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [Validators.required,Validators.minLength(3),Validators.maxLength(5)])
    })
  }
  onSubmit() {
    // debugger;s
    this.submitted = true;
    if (this.Login.invalid) {
      return

      alert("form submitted successfully")
    }
    if (this.Login.get('email')?.value == "akshay@gmail.com" && this.Login.get('pass')?.value == "sagve") {
      console.log(this.Login.get('email')?.value);
      console.log(this.Login.get('pass')?.value);
      localStorage.setItem("user", "1");
      this.router.navigate(['/sign']);
    }
    else {
      alert("login fail");
    }

  }
  // displayValue = '';

  // getValue(val: string) {
  //   console.log(val);
  //   this.displayValue = val
  // }
  // get user() {
  //   return this.Login.get('email');
  //   console.log(this.Login.value)
  // }
  get loginFormControl() {
    return this.Login.controls;

  }

}
