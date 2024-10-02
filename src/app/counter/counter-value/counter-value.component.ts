import {
  Component,
  OnInit
} from '@angular/core';
import { Store } from "@ngrx/store";
import {
  COUNTER_STORE,
  CounterModel
} from "../ model/counter.model";
import { Observable } from "rxjs";

@Component({
  selector: 'app-counter-value',
  templateUrl: './counter-value.component.html',
  styleUrls: ['./counter-value.component.css']
})
export class CounterValueComponent implements OnInit {

  counter$: Observable<CounterModel> | undefined;

  constructor(private store$: Store<{counter: CounterModel}>) {}

  ngOnInit(): void {

    this.counter$ = this.store$.select(COUNTER_STORE);
  }

}
