import { NgModule } from "@angular/core";
import {
  RouterModule,
  Routes
} from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PostListComponent } from "./post/post-list/post-list.component";
import { AddPostComponent } from "./post/add-post/add-post.component";
import { UpdatePostComponent } from "./post/update-post/update-post.component";

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'counter',
    loadChildren: () => import('./counter/counter.module').then(m => m.CounterModule),
  },
  { path: 'posts', component: PostListComponent,
    children: [{ path: 'add', component: AddPostComponent },
               { path: 'edit/:id', component: UpdatePostComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes,  { useHash: false })],
  exports: []
})
export class AppRoutingModule {
}
