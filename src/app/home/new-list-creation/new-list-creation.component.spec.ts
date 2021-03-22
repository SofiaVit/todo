import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewListCreationComponent } from './new-list-creation.component';

describe('NewListCreationComponent', () => {
  let component: NewListCreationComponent;
  let fixture: ComponentFixture<NewListCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewListCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewListCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
