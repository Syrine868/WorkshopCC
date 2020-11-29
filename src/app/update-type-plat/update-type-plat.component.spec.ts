import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTypePlatComponent } from './update-type-plat.component';

describe('UpdateTypePlatComponent', () => {
  let component: UpdateTypePlatComponent;
  let fixture: ComponentFixture<UpdateTypePlatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTypePlatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTypePlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
