import { APP_ID, Component } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/api/service.service';
// import { userInfo } from 'os';



@Component({
  selector: 'app-sign-page',
  templateUrl: './sign-page.component.html',
  styleUrls: ['./sign-page.component.css']
})
export class SignPageComponent {
  FormSubmitted = false;
  Sign!: FormGroup;
  obj = {
    id: 0,
    name: '',
    mob: '',
    email: '',
    pass: '',
  }
  users: any;
  text: any;
  value: any;
  oldText: any;
  newText: any;
  item: any;
  arr: any;
  id: any
  userObj: Array<any> = [];

  // Login = this.fb.group({
  //   name: [null, Validators.required],
  //   mob: [null, Validators.required],
  //   email: [null, Validators.required],
  //   pass: [null, Validators.required]
  // })

  constructor(private fb: FormBuilder, private api: ServiceService) { }

  ngOnInit(): void {
    // debugger;
    this.Sign = this.fb.group({
      name: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
      mob: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern(/^(0|[1-9]\d*)$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
    })
    this.users = localStorage.getItem('userinfo');
    this.users = JSON.parse(this.users);
  }

  onSubmit() {
    // debugger;
    this.FormSubmitted = true;
    if (this.Sign.invalid) {
      // alert("form submitted successfully")
      return
    }
    this.saveInfo();
    alert("data stored successfully")
    this.Sign.reset();
    this.Sign.get('name')?.clearValidators();
    this.Sign.get('name')?.updateValueAndValidity();
    this.Sign.get('mob')?.clearValidators();
    this.Sign.get('mob')?.updateValueAndValidity();
    this.Sign.get('email')?.clearValidators();
    this.Sign.get('email')?.updateValueAndValidity();
    this.Sign.get('pass')?.clearValidators();
    this.Sign.get('pass')?.updateValueAndValidity();

  }

  saveInfo() {
    // debugger;
    const userObj = this.Sign.value;
    this.users = localStorage.getItem('userinfo');
    this.users = this.users ? JSON.parse(this.users) : [];
    this.users.push(userObj);
    localStorage.setItem('userinfo', JSON.stringify(this.users))
  }

  GetData() {
    // debugger;
    this.users = localStorage.getItem('userinfo');
    this.users = JSON.parse(this.users);
    return this.users;
  }

  deleteInfo(i: number) {
    // console.log(i)
    // debugger;
    this.users = localStorage.getItem('userinfo');
    this.users = JSON.parse(this.users);
    alert("Data Deleted Successfully");
    this.users.splice(i, 1);
    localStorage.setItem('userinfo', JSON.stringify(this.users))
    // localStorage.removeItem();
  }

  get formSignControl() {
    return this.Sign.controls;
  }


  EditInfo(item: any, id: any) {
    // debugger;
    this.obj = item;
    this.text = id;

    this.Sign.controls['name'].setValue(item.name);
    this.Sign.controls['mob'].setValue(item.mob);
    this.Sign.controls['email'].setValue(item.email);
    this.Sign.controls['pass'].setValue(item.pass);
    // this.Login.controls['name'].patchValue(item.name)

  }

  // updateInfo(users: any,id:any) {
  //   debugger;
  //   var id = this.text;
  //   this.userObj = [];
  //   this.userObj = this.Login.value;

  //   this.users = localStorage.getItem('userinfo');
  //   this.users = this.users ? JSON.parse(this.users) : [];
  //   this.userObj.push(users[id]);
  //   console.log("---------------------")
  //   console.log(this.userObj)


  //   // localStorage.removeItem('userinfo');
  //   localStorage.setItem('userinfo', JSON.stringify(this.users))
  //   this.text = null;
  // }

  updateInfo(users: any, id: any) {
    // debugger;
    var id = this.text;
    this.users = localStorage.getItem("userinfo");
    this.users = JSON.parse(this.users);

    console.log(this.users[id]);
    this.users[id].name = this.Sign.get("name")?.value;
    this.users[id].mob = this.Sign.get("mob")?.value;
    this.users[id].email = this.Sign.get("email")?.value;
    this.users[id].pass = this.Sign.get("pass")?.value;


    localStorage.removeItem("userinfo");

    localStorage.setItem("userinfo", JSON.stringify(this.users))
    this.users = localStorage.getItem("userinfo");
    this.users = JSON.parse(this.users);

    console.log(this.users);


  }

}
