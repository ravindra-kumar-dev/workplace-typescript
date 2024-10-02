import {
  Component,
  OnInit
} from '@angular/core';
import { Store } from "@ngrx/store";
import { CounterModel } from "../ model/counter.model";

@Component({
  selector: 'app-counter-value',
  templateUrl: './counter-value.component.html',
  styleUrls: ['./counter-value.component.css']
})
export class CounterValueComponent implements OnInit {

  counter: number = 0;

  constructor(private store: Store<{counter: CounterModel}>) {}

  ngOnInit(): void {
    this.store.select("counter").subscribe(data => {
      this.counter = data.counter;
    })
  }

}
