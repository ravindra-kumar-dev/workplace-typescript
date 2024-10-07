import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { changeChannelName } from "../store/counter.action";
import { getChannelName } from "../store/counter.selector";
import { AppState } from "../../store/app-state.model";

@Component({
  selector: 'app-display-channel',
  templateUrl: './display-channel.component.html',
  styleUrls: ['./display-channel.component.css']
})
export class DisplayChannelComponent implements OnInit, OnDestroy {

  channelName: string | undefined;
  subscription: Subscription | undefined;

  constructor(private store$: Store<AppState>) {}

  ngOnInit(): void {
   this.subscription = this.store$.select(getChannelName).subscribe( data => {
     this.channelName = data;
   })
  }

  onChangeChannelName(): void {
      this.store$.dispatch(changeChannelName());
  }

  ngOnDestroy(): void {
      this.subscription?.unsubscribe();
  }
}
