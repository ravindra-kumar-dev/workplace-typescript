import { createReducer } from "@ngrx/store";
import { initPostListState } from "./post.state";

const _postListReducer = createReducer(initPostListState)

export function postListReducer(state : any, action: any) {
  return _postListReducer (state, action);
}
