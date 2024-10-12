import {
  Component,
  OnInit
} from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from "../../store/app-state.model";
import { getPosts } from "../../store/app-store";
import {
  Observable
} from "rxjs";
import { Post } from "../model/post.model";
import { deletePost } from "../store/post.action";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts$: Observable<Post[]> | undefined;

  constructor(private store$: Store<AppState>) {}

  ngOnInit(): void {
    this.posts$ = this.store$.select(getPosts);
  }

  onDeletePost(id: string): void {
    if(confirm("Are you sure, you want to delete post!")){
      this.store$.dispatch(deletePost( {id}));
    } else {
      return;
    }
  }
}
