import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { Store } from "@ngrx/store";
import { loginStart } from "../store/auth.actions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private store$: Store) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    })
  }

  onLoginSubmit(){
    const email: string = this.loginForm.get('email').value;
    const password: string = this.loginForm.get('password').value;
    this.store$.dispatch(loginStart({email, password}));
  }
}
