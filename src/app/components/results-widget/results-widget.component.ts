import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-results-widget',
  templateUrl: './results-widget.component.html',
  styleUrls: ['./results-widget.component.scss']
})
export class ResultsWidgetComponent implements OnInit {
  @Input() title: string | undefined = "";
  
  testCases = [
    {name: "Total", value: "03", type: "success"},
    {name: "Passed", value: "00", type: "success"},
    {name: "Failed", value: "01", type: "failure"},
    {name: "Not Executed", value: "01", type: "failure"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
