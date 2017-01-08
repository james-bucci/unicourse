import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-match',
  templateUrl: './color-match.component.html',
  styleUrls: ['./color-match.component.css']
})
export class ColorMatchComponent implements OnInit {

  matchedColor: string = 'white';
  searchString: string = '';

  constructor() { }

  ngOnInit() {
  }

  onKeyPressed() {
    console.log('Key Pressed', this.searchString);
  }
}
