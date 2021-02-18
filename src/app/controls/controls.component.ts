import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
})
export class ControlsComponent implements OnInit {

  data: any = [];

  constructor() {
      this.data[0] = 'TextBox';
      this.data[1] = "DropDown";
  }

  ngOnInit(): void {
  }

}
