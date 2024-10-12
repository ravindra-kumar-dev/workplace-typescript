import {
  createFeatureSelector,
  createSelector
} from "@ngrx/store";
import { PostsState } from "./post.state";

const getPostsState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(getPostsState, (state) => {
  return state.posts;
});

export const getPostById = createSelector(getPostsState, (state, action) => {
  return state.posts.find(post => post.id === action.id);
});
