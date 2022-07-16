import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements OnInit {
  @Input() items: any[] = [];
  openItemIndex = -1;

  constructor() {}

  ngOnInit(): void {}

  onClick(index: number) {
    console.log('index', index);
    if (this.openItemIndex === index) {
      this.openItemIndex = -1;
    } else {
      this.openItemIndex = index;
    }
    console.log('openItemIndex', this.openItemIndex);
  }
}
