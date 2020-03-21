import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationTileComponent } from './donation-tile.component';

describe('DonationTileComponent', () => {
  let component: DonationTileComponent;
  let fixture: ComponentFixture<DonationTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
