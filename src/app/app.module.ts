import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CounterButtonComponent } from './counter/counter-button/counter-button.component';
import { CounterValueComponent } from './counter/counter-value/counter-value.component';
import { StoreModule } from "@ngrx/store";
import { counterReducer } from "./counter/store/counter.reducer";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "./environments/environments";
import { CounterCustomComponent } from './counter/counter-custom/counter-custom.component';
import { FormsModule } from "@angular/forms";
import { DisplayChannelComponent } from './counter/display-channel/display-channel.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from "./app-routing.module";
import {
  RouterLink,
  RouterOutlet
} from "@angular/router";
import { HeaderComponent } from './shared/components/header/header.component';
import { PostListComponent } from './post/post-list/post-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterButtonComponent,
    CounterValueComponent,
    CounterCustomComponent,
    DisplayChannelComponent,
    HomeComponent,
    HeaderComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({counter: counterReducer}),
    StoreDevtoolsModule.instrument({maxAge: 50, logOnly: environment.production}),
    RouterOutlet,
    RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
