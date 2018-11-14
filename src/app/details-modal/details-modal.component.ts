import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.css']
})
export class DetailsModalComponent implements OnInit {
  todo;

  constructor(@Inject(MAT_DIALOG_DATA) public data) {
    this.todo = data.todo;
  }

  ngOnInit() {}
}
