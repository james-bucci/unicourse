import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Input() placeholder : string = "Search..";
 // @Output() searched : EventEmitter = new EventEmitter;

  searchString: string;

  constructor() { }

  ngOnInit() {
  }

  onClear(input) {
    input.value = '';
  }
}
