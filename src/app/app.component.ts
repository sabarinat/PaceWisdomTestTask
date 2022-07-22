import { Component } from '@angular/core';
import { userStories } from './common/constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  selectedMenuIndex = 3;
  selectedUserStory = 0;

  images = [
    "../assets/sidemenu/Icon.svg",
    "../assets/sidemenu/Group 47644.svg",
    "../assets/sidemenu/Activity.svg",
    "../assets/sidemenu/Bag.svg",
    "../assets/sidemenu/Chart.svg",
    "../assets/sidemenu/3-User.svg",
    "../assets/sidemenu/Wallet.svg",
    "../assets/sidemenu/Document.svg",
    "../assets/sidemenu/Paper.svg",
    "../assets/sidemenu/Combined-Shape.svg",
]
    



  mockData = userStories;


  selectMenu(menuIndex: number) {
    this.selectedMenuIndex = menuIndex
  }

  selectUserStory (userStoryIndex: number)  {
    this.selectedUserStory = userStoryIndex
  }
}