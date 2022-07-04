import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COmpaniesComponent } from './companies.component';

describe('COmpaniesComponent', () => {
  let component: COmpaniesComponent;
  let fixture: ComponentFixture<COmpaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [COmpaniesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(COmpaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
