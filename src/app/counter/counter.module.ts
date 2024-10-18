import { NgModule } from "@angular/core";
import { CounterComponent } from "./counter.component";
import { CounterButtonComponent } from "./counter-button/counter-button.component";
import { CounterValueComponent } from "./counter-value/counter-value.component";
import { CounterCustomComponent } from "./counter-custom/counter-custom.component";
import { DisplayChannelComponent } from "./display-channel/display-channel.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import {
  RouterLink,
  RouterModule,
  RouterOutlet,
  Routes
} from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { COUNTER_STATE_NAME } from './store/counter.selector'
import { counterReducer } from "./store/counter.reducer";

const routes: Routes = [
  { path:'',
    component: CounterComponent
  },
]
@NgModule({
  declarations: [
    CounterComponent,
    CounterButtonComponent,
    CounterValueComponent,
    CounterCustomComponent,
    DisplayChannelComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    RouterLink,
    StoreModule.forFeature(COUNTER_STATE_NAME, counterReducer),
    RouterModule.forChild(routes)
  ],
})
export class CounterModule {}
