import { NgModule } from "@angular/core";
import { PostListComponent } from "./post-list/post-list.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { UpdatePostComponent } from "./update-post/update-post.component";
import {
  FormsModule,
  ReactiveFormsModule
} from "@angular/forms";
import {
  RouterLink,
  RouterModule,
  RouterOutlet,
  Routes
} from "@angular/router";
import { CommonModule }        from "@angular/common";

const routes: Routes = [
  { path: '', component: PostListComponent,
    children: [{ path: 'add', component: AddPostComponent },
      { path: 'edit/:id', component: UpdatePostComponent }
    ]
  }
];
@NgModule({
  declarations:
    [ PostListComponent,
    AddPostComponent,
    UpdatePostComponent ],
  imports:
    [ CommonModule,
    FormsModule,
    RouterOutlet,
    RouterLink,
    ReactiveFormsModule,
    RouterModule.forChild(routes)]
})
export class PostModule {

}
