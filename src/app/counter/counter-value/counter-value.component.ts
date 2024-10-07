import {
  Component,
  OnInit
} from '@angular/core';
import { Store } from "@ngrx/store";
import { getCounter } from "../store/counter.selector";
import { AppState } from "../../store/app-state.model";

@Component({
  selector: 'app-counter-value',
  templateUrl: './counter-value.component.html',
  styleUrls: ['./counter-value.component.css']
})
export class CounterValueComponent implements OnInit {

  counterVal: number | undefined;

  constructor(private store$: Store<AppState>) {}

  ngOnInit(): void {

    this.store$.select(getCounter).subscribe(data => {
      this.counterVal = data;
    });
  }

}
