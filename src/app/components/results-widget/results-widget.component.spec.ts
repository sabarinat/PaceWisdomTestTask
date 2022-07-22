import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsWidgetComponent } from './results-widget.component';

describe('ResultsWidgetComponent', () => {
  let component: ResultsWidgetComponent;
  let fixture: ComponentFixture<ResultsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
