import { CounterModel } from "../counter/ model/counter.model";
import { counterReducer } from "../counter/store/counter.reducer"
import { postListReducer } from "../post/store/post.reducer";
import { Post } from "../post/model/post.model";

export interface AppState {
  counter: CounterModel;
  posts: Post[];
}


export const appReducer = {
  counter: counterReducer,
  posts : postListReducer
};
