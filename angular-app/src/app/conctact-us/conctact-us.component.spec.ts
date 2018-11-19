import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConctactUsComponent } from './conctact-us.component';

describe('ConctactUsComponent', () => {
  let component: ConctactUsComponent;
  let fixture: ComponentFixture<ConctactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConctactUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConctactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
