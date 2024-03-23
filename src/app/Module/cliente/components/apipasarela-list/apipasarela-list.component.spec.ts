import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApipasarelaListComponent } from './apipasarela-list.component';

describe('ApipasarelaListComponent', () => {
  let component: ApipasarelaListComponent;
  let fixture: ComponentFixture<ApipasarelaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApipasarelaListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApipasarelaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
