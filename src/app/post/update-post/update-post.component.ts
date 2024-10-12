import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { Post } from "../model/post.model";
import { Store } from "@ngrx/store";
import { AppState } from "../../store/app-state.model";
import { getPostById } from "../store/post.selectors";
import { updatePost } from "../store/post.action";

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit{

  post: Post;
  postUpdateForm: FormGroup;
  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(data=> {
      const id: string = data.get('id');
      this.store.select<Post>(getPostById,{ id }).subscribe((data) => {
        this.post = data;
        this.buildForm(this.post);
      });
    })
  }

  buildForm(post: Post) {
    this.postUpdateForm = new FormGroup({
      title: new FormControl(post.title, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(post.description, [Validators.required, Validators.minLength(10)])
    })
  }

  onPostUpdateSubmit() {
    if(this.postUpdateForm.invalid) return;

    const post: Post = {
      id: this.post.id,
      title: this.postUpdateForm.value.title,
      description: this.postUpdateForm.value.description
    }
    this.store.dispatch(updatePost({post}));
    this.refreshForm();
  }

  refreshForm(): void {
    this.postUpdateForm.patchValue({title:'', description:''});
    this.validateAllFormsFields(this.postUpdateForm);
  }

  validateAllFormsFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach( fromControl => {
      const formControl = formGroup.get(fromControl);
      if(formControl instanceof FormGroup) {
        this.validateAllFormsFields(formControl)
      } else {
        formControl.markAsUntouched({onlySelf: true});
      }
    })
  }
}
