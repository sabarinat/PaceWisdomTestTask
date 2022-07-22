import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {

  @Input() name: string | undefined = "";
  @Input() isActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
