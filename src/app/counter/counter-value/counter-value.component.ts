import {
  Component,
  OnInit
} from '@angular/core';
import { Store } from "@ngrx/store";
import { CounterModel } from "../ model/counter.model";
import { getCounter } from "../store/counter.selector";

@Component({
  selector: 'app-counter-value',
  templateUrl: './counter-value.component.html',
  styleUrls: ['./counter-value.component.css']
})
export class CounterValueComponent implements OnInit {

  counterVal: number | undefined;

  constructor(private store$: Store<{counter: CounterModel}>) {}

  ngOnInit(): void {

    this.store$.select(getCounter).subscribe(data => {
      this.counterVal = data;
    });
  }

}
