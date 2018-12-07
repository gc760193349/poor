import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChakanComponent } from './chakan.component';

describe('ChakanComponent', () => {
  let component: ChakanComponent;
  let fixture: ComponentFixture<ChakanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChakanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChakanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
