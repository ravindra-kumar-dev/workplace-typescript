import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "./environments/environments";
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from "./app-routing.module";
import {
  RouterLink,
  RouterOutlet
} from "@angular/router";
import { HeaderComponent } from './shared/components/header/header.component';
import { EffectsModule } from "@ngrx/effects";
import { AuthEffect } from "./auth/store/auth.effect";
import { HttpClientModule }    from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([ AuthEffect ]),
    StoreDevtoolsModule.instrument({maxAge: 50, logOnly: environment.production}),
    RouterOutlet,
    RouterLink,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
