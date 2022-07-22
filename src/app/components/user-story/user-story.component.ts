import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-story',
  templateUrl: './user-story.component.html',
  styleUrls: ['./user-story.component.scss']
})
export class UserStoryComponent implements OnInit {
  @Input() name = "";
  @Input() status = "";
  @Input() showIcon: boolean | undefined = false;
  @Input() isActive: boolean | undefined = false;
  



  constructor() { }

  ngOnInit(): void {
  }

}
