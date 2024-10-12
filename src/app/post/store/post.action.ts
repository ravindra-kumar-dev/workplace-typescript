import {
  createAction,
  props
} from "@ngrx/store";
import { Post } from "../model/post.model";

export const ADD_POST_ACTION: string = "[Post Page] add post";
export const UPDATE_POST_ACTION: string = "[Post Page] update post";
export const DELETE_POST_ACTION: string ="[Post page] delete post"

export const addPost= createAction(ADD_POST_ACTION, props<{post: Post}>());
export const updatePost= createAction(UPDATE_POST_ACTION, props<{post: Post}>());
export const deletePost = createAction(DELETE_POST_ACTION, props<{id: string}>());
