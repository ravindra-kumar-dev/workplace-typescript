import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  RouterModule,
  Routes
} from "@angular/router";
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { AUTH_SELECTOR_NAME } from "./store/auth.selector";
import { AuthReducer } from "./store/auth.reducer";
import { EffectsModule } from "@ngrx/effects";
import { AuthEffect } from "./store/auth.effect";

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent }
    ]
  }
]

@NgModule({
  declarations: [ LoginComponent ],
  imports: [ CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([AuthEffect]),
    StoreModule.forFeature(AUTH_SELECTOR_NAME, AuthReducer),
    ReactiveFormsModule ]
})
export class AuthModule {}
