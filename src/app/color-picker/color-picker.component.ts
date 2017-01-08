import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  
  colors : string[] = ['red', 'blue', 'green', 'yellow'];
  @Input() inputColor: string = 'black';
  titleColor: string;

  @Output('colorSelected') selected = new EventEmitter;

  constructor() { }

  ngOnInit() {
    this.titleColor = this.inputColor;
  }

  setColor(color: string) {
    this.titleColor = color;
    this.selected.next(color);
  }

  resetColor() {
    this.setColor(this.inputColor);  
  }
}
