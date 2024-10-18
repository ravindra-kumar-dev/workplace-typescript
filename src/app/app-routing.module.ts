import { NgModule } from "@angular/core";
import {
  RouterModule,
  Routes
} from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'counter',
    loadChildren: () => import('./counter/counter.module').then(m => m.CounterModule),
  },
  { path: 'posts',
    loadChildren: () => import('./post/post.module').then(m => m.PostModule),
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes,  { useHash: false })],
  exports: []
})
export class AppRoutingModule {
}
