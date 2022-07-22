import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  @Input() title: string | undefined = ""
  @Input() value: string | undefined = ""
  @Input() type: string | undefined = "";

  constructor() { }

  ngOnInit(): void {
  }

}
