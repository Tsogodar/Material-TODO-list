import { RouterTestingModule } from '@angular/router/testing';
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
  todos: any = [
    {
      uid: '1',
      title: 'title-1',
      describe: 'desc-1',
      addedAt: new Date(),
      endedAt: new Date()
    },
    {
      uid: '2',
      title: 'dupa',
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
  basic: any = [
    {
      uid: '1',
      title: 'title-1',
      describe: 'desc-1',
      addedAt: new Date(),
      endedAt: new Date()
    },
    {
      uid: '2',
      title: 'dupa',
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
  applyFilter(filterValue: string) {
    if (filterValue === '') {
      this.todos = this.basic;
    } else {
      this.todos = this.basic.filter(todo => {
        return todo.title.match(filterValue);
      });
      if (this.todos.length === 0) {
        this.todos = [{ title: 'Brak wyników wyszukiwania' }];
      }
    }
  }
}
