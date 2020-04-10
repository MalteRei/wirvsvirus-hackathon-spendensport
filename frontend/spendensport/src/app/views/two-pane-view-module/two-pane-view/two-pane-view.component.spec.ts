import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoPaneViewComponent } from './two-pane-view.component';

describe('TwoPaneViewComponent', () => {
  let component: TwoPaneViewComponent;
  let fixture: ComponentFixture<TwoPaneViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoPaneViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoPaneViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
