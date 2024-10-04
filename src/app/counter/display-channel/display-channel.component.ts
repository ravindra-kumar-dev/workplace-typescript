import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import {
    COUNTER_STORE,
    CounterModel
} from "../ model/counter.model";
import { changeChannelName } from "../store/counter.action";

@Component({
  selector: 'app-display-channel',
  templateUrl: './display-channel.component.html',
  styleUrls: ['./display-channel.component.css']
})
export class DisplayChannelComponent implements OnInit, OnDestroy {

  channelName: string | undefined;
  subscription: Subscription | undefined;

    constructor(private store$: Store<{counter: CounterModel}>) {}

  ngOnInit(): void {
   this.subscription = this.store$.select(COUNTER_STORE).subscribe( data => {
     console.log("ChannelName change is called");
     this.channelName = data.channelName;
   })
  }

  onChangeChannelName(): void {
      this.store$.dispatch(changeChannelName());
  }

  ngOnDestroy(): void {
      this.subscription?.unsubscribe();
  }
}
