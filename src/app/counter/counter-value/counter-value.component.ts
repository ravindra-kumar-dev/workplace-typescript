import {
  Component,
  OnInit
} from '@angular/core';
import { Store } from "@ngrx/store";
import {
  COUNTER_STORE,
  CounterModel
} from "../ model/counter.model";

@Component({
  selector: 'app-counter-value',
  templateUrl: './counter-value.component.html',
  styleUrls: ['./counter-value.component.css']
})
export class CounterValueComponent implements OnInit {

  counterVal: number | undefined;

  constructor(private store$: Store<{counter: CounterModel}>) {}

  ngOnInit(): void {

    this.store$.select(COUNTER_STORE).subscribe(data => {
      console.log("Counter value change is called");
      this.counterVal = data.counter;
    });
  }

}
