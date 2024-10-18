import {
  createFeatureSelector,
  createSelector
} from "@ngrx/store";
import { CounterModel }          from "../ model/counter.model";

export const COUNTER_STATE_NAME: string = 'counter';

const getCounterState = createFeatureSelector<CounterModel>(COUNTER_STATE_NAME);

export const getCounter = createSelector(getCounterState, (state) => {
    return state.counter;
  });

export const getChannelName = createSelector(getCounterState, (state) => {
  return state.channelName;
});
