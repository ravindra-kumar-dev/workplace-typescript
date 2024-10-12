import {
  createReducer,
  on,
} from "@ngrx/store";
import {
  initialPostsState
} from "./post.state";
import {
  addPost,
  deletePost,
  updatePost,
} from "./post.action";
import { Post } from "../model/post.model";

const _postListReducer = createReducer(initialPostsState,
  on(addPost, addPostData),
  on(updatePost,updatePostData),
  on(deletePost, deletePostData)
);

function deletePostData(state, action) {
  return {
    ...state,
    posts: state.posts.filter(post => { return post.id !== action.id })
  }
}


function updatePostData(state, action) {
  let updatedPost: Post = {...action.post};
  const updatedPosts: Post[] = state.posts.map(data => {
    return data.id === updatedPost.id ? updatedPost : data;
  })
  return {
    ...state,
    posts: updatedPosts
  }
}

function addPostData(state, action) {
  let post: Post = {...action.post}
  post.id = (state.posts.length + 1).toString();
  return {
    ...state,
    posts: [...state.posts, post]
  };
}

export function postListReducer(state, action) {
  return _postListReducer (state, action);
}
