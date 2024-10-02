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

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterButtonComponent,
    CounterValueComponent,
    CounterCustomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({counter: counterReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 50, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
