import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    { title: 'Question 1', content: 'This is a Answer 1' },
    { title: 'Question 2', content: 'This is a Answer 2' },
    { title: 'Question 3', content: 'This is a Answer 3' },
  ];
  constructor() {}

  ngOnInit(): void {}

  toggleModal() {
    this.modalOpen = !this.modalOpen;
  }
}
