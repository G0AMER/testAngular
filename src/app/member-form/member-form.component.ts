import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatInputModule} from "@angular/material/input";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MemberService} from "../services/member.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Member} from "../../models/Member";
import {MatButtonModule} from "@angular/material/button";


@Component({
  selector: 'app-member-form',
  standalone: true,
  imports: [CommonModule, MatInputModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent {
  form!: FormGroup

  constructor(private MS: MemberService, private router: Router, private activatedRoute: ActivatedRoute) {
  };

  ngOnInit() {
    let currentUrl: string;
    let isEdit: boolean;
    let id: string;
    this.activatedRoute.url.subscribe(segments => {
      currentUrl = segments.map(segment => segment.path).join('/');
      console.log(currentUrl);
      isEdit = currentUrl.slice(0, 4) == 'edit';
      console.log(isEdit);
      if (isEdit) {
        id = currentUrl.slice(5, currentUrl.length);
        console.log(id);
        this.initEdit();
      } else {
        this.initForm();
      }
    });
  }

  initForm(): void {
    this.form = new FormGroup({
      cin: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      cv: new FormControl(null, []),
      type: new FormControl(null, [Validators.required]),
    })
  }

  initEdit(): void {
    //getMemberById
    this.form = new FormGroup({
      cin: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      cv: new FormControl(null, []),
      type: new FormControl(null, [Validators.required]),
    })
  }

  submit(): void {
    //récuperer les données dans la variable form
    console.log(this.form.value);

    const x: Member = {...this.form.value, createdDate: new Date().toISOString()};
    this.MS.addMember(x).subscribe(() => {
        this.router.navigate(['']);
      }
    );
  }

}
