import {
  Component,
  OnInit
} from '@angular/core';
import {
  Store
} from "@ngrx/store";
import { customIncrement } from "../store/counter.action";
import { AppState } from "../../store/app-state.model";

@Component({
  selector: 'app-counter-custom',
  templateUrl: './counter-custom.component.html',
  styleUrls: ['./counter-custom.component.css']
})
export class CounterCustomComponent implements OnInit {

  customValue: number = 0;

  constructor(private store$: Store<AppState>) {
  }
  ngOnInit() {}

  onCustomCounter(): void {
    this.store$.dispatch(customIncrement({value: +this.customValue}));
  }
}
