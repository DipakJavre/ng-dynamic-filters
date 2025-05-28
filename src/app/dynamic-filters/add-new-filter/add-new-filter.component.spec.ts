import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewFilterComponent } from './add-new-filter.component';

describe('AddNewFilterComponent', () => {
  let component: AddNewFilterComponent;
  let fixture: ComponentFixture<AddNewFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
