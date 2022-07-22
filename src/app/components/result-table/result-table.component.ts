import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss'],
})
export class ResultTableComponent implements OnInit {
  selectedIndex = 0;

  constructor() {}

  ngOnInit(): void {}

  switchTab(index: number) {
    this.selectedIndex = index;
  }
}
