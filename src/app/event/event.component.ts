import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EvntService} from "../services/evnt.service";
import {Evnt} from "../../models/Event";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {RouterLink} from "@angular/router";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
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


  constructor(private ES: EvntService, public dialogRef: MatDialog, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.ES.getAllEvents().subscribe((response) => {
      this.dataSource = response
    })
  }

  openDialog() {


    //this.dialog.open(EventFormComponent, dialogConfig);

    const dialogRef = this.dialog.open(EventFormComponent);

    dialogRef.afterClosed().subscribe((data: Evnt) => {
        if (data.lieu && data.id && data.dateFin && data.dateDebut && data.titre) {
          this.ES.addEvent(data).subscribe(() => {
            this.ES.getAllEvents().subscribe((data) => {
              this.dataSource = data;
            })
          })
        }
      }
    );
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

  openDialogToModify(data:Evnt) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = data;
    console.log(dialogConfig.data);
    const dialogRef = this.dialog.open(EventFormComponent,dialogConfig);
    dialogRef.afterClosed().subscribe((data: Evnt) => {
        if (data.lieu && data.id && data.dateFin && data.dateDebut && data.titre) {
          this.ES.UpdateEvent(data).subscribe(() => {
            this.ES.getAllEvents().subscribe((data) => {
              this.dataSource = data;
            })
          })
        }
      }
    );
  }
}
