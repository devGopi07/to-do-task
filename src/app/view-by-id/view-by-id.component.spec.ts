import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewByIdComponent } from './view-by-id.component';

describe('ViewByIdComponent', () => {
  let component: ViewByIdComponent;
  let fixture: ComponentFixture<ViewByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewByIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
