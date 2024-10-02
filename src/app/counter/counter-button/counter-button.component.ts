import {
  Component,
  OnInit
} from '@angular/core';
import { Store } from "@ngrx/store";
import {
    decrement,
    increment,
    reset
} from "../store/counter.action";
import { CounterModel } from "../ model/counter.model";

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit{

  constructor(private store: Store<{counter: CounterModel}> ) {}

  ngOnInit() {
  }

  onIncrement(): void{
    this.store.dispatch(increment());
  }

  onDecrement(): void{
      this.store.dispatch(decrement());
  }

  onReset(): void{
      this.store.dispatch(reset());
  }
}
