import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserStoryComponent } from './components/user-story/user-story.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ResultsWidgetComponent } from './components/results-widget/results-widget.component';
import { ResultTableComponent } from './components/result-table/result-table.component';
import { ChipComponent } from './components/chip/chip.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserStoryComponent,
    StatisticsComponent,
    ResultsWidgetComponent,
    ResultTableComponent,
    ChipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
