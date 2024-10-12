import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import {
  Post,
} from "../model/post.model";
import { Store } from "@ngrx/store";
import { AppState } from "../../store/app-state.model";
import { addPost } from "../store/post.action";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title:  new FormControl(null, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(10)])
    })
  }

  onPostFormSubmit(): void {
    if(this.postForm.invalid){ return }
    const post: Post = {
      title: this.postForm.value.title,
      description: this.postForm.value.description
    }
    this.store.dispatch(addPost({ post }));
    this.resetForm();
  }

  resetForm(): void {
    this.postForm.patchValue({title: '', description: ''});
    this.validateAllFormsFields(this.postForm);
  }

  validateAllFormsFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(formField => {
      const control = this.postForm.get(formField);
      if(control instanceof FormGroup) {
        this.validateAllFormsFields(control);
      } else {
        control.markAsUntouched({onlySelf: true});
      }
    });
  }
}
