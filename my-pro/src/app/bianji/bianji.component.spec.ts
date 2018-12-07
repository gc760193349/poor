import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BianjiComponent } from './bianji.component';

describe('BianjiComponent', () => {
  let component: BianjiComponent;
  let fixture: ComponentFixture<BianjiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BianjiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BianjiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
