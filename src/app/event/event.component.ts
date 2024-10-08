import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EvntService} from "../services/evnt.service";
import {Evnt} from "../../models/Event";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {RouterLink} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {EventFormComponent} from "../event-form/event-form.component";

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatTableModule, RouterLink],
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  dataSource: Evnt[] = [];
  displayedColumns: string[] = ['id', 'title', 'DateDebut', 'DateFin', 'Lieu', 'Actions'];


  constructor(private ES: EvntService, public dialogRef: MatDialog) {
  }

  ngOnInit(): void {
    this.ES.getAllEvents().subscribe((response) => {
      this.dataSource = response
    })
  }

  openDialog(): void {
    let dialogRef = this.dialogRef.open(EventFormComponent)
  }

  deleteEvent(element: Evnt) {
    // Call the delete method from the service
    this.ES._deleteEvent(element.id).subscribe(() => {
      // Handle success, e.g., refresh the list or show a message
    }, error => {
      // Handle error, if any
      console.error('Error deleting member', error);
    });
    this.ngOnInit();
  }
}
