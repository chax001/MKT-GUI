import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbgboComponent } from './bbgbo.component';

describe('BbgboComponent', () => {
  let component: BbgboComponent;
  let fixture: ComponentFixture<BbgboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BbgboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BbgboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
