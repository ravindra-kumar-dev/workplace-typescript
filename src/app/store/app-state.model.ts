import { CounterModel } from "../counter/ model/counter.model";
import { PostList }     from "../post/model/post-list.model";
import { counterReducer } from "../counter/store/counter.reducer"
import { postListReducer } from "../post/store/post.reducer";

export interface AppState {
  counter: CounterModel;
  postList: PostList;
}


export const appReducer = {
  counter: counterReducer,
  postList : postListReducer
};
