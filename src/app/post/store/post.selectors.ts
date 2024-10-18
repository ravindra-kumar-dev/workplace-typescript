import {
  createFeatureSelector,
  createSelector
} from "@ngrx/store";
import { PostsState } from "./post.state";

export const POST_STATE_NAME: string = 'posts';
const getPostsState = createFeatureSelector<PostsState>(POST_STATE_NAME);

export const getPosts = createSelector(getPostsState, (state) => {
  return state.posts;
});

export const getPostById = createSelector(getPostsState, (state, action) => {
  return state.posts.find(post => post.id === action.id);
});
