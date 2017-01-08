import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {
  previewColor : string = 'black';

  constructor() { }

  ngOnInit() {
  }

  onColorSelected(color) {
    console.log('Set Color', color)
    this.previewColor = color;
  }

}
