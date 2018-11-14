import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material';
import { DetailsModalComponent } from '../details-modal/details-modal.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos = [
    {
      uid: '1',
      title: 'title-1',
      describe: 'desc-1',
      addedAt: new Date(),
      endedAt: new Date()
    },
    {
      uid: '2',
      title: 'title-2',
      describe: 'desc-2',
      addedAt: new Date(),
      endedAt: new Date()
    },
    {
      uid: '3',
      title: 'title-3',
      describe: 'desc-3',
      addedAt: new Date(),
      endedAt: new Date()
    }
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }

  details(todo) {
    const dialogRef = this.dialog.open(DetailsModalComponent, {
      width: '250px',
      data: { todo: todo }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
