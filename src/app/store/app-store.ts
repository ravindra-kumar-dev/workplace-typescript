import {
  createFeatureSelector,
  createSelector
} from "@ngrx/store";
import { AppState } from "./app-state.model";

const appState = createFeatureSelector<AppState>("posts");

export const getCounter = createSelector(appState, (state) => {
  return state.counter;
});

export const getPosts = createSelector (appState, (state) => {
  return state.posts;
})
