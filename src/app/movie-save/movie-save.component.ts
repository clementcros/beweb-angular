import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
@Component({
  selector: 'app-movie-save',
  templateUrl: './movie-save.component.html',
  styleUrls: ['./movie-save.component.css']
})
export class MovieSaveComponent implements OnInit {

  constructor() { }
  @Input() favorite: any;
  // @ts-ignore
  ngOnInit() {
  }

}
