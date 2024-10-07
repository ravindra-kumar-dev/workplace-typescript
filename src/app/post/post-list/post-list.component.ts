import {
  Component,
  OnInit
} from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from "../../store/app-state.model";
import { getPosts } from "../../store/app-store";
import { PostList } from "../model/post-list.model";
import {
  Observable
} from "rxjs";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{

  postList$: Observable<PostList> | undefined;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.postList$ = this.store.select(getPosts);
  }

}
