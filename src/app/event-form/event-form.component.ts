import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatInputModule} from "@angular/material/input";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {ActivatedRoute, Router} from "@angular/router";
import {EvntService} from "../services/evnt.service";
import {MatDialogRef} from "@angular/material/dialog";
import {MatDatepickerModule} from "@angular/material/datepicker";

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [CommonModule, MatInputModule, ReactiveFormsModule, MatButtonModule, MatDatepickerModule],
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent {

  form!: FormGroup

  constructor(private ES: EvntService, private router: Router, private activatedRoute: ActivatedRoute, public dialogRef: MatDialogRef<EventFormComponent>) {

  };

  ngOnInit() {
    this.initForm();
  }


  initForm(): void {
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      dateDebut: new FormControl(null, [Validators.required]),
      dateFin: new FormControl(null, [Validators.required]),
      Location: new FormControl(null, [Validators.required]),
    })
  }

  submit() {

  }
}
