import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPlatsComponent } from './details-plats.component';

describe('DetailsPlatsComponent', () => {
  let component: DetailsPlatsComponent;
  let fixture: ComponentFixture<DetailsPlatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPlatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPlatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
