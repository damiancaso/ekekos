import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionListComponent } from './seleccion-list.component';

describe('SeleccionListComponent', () => {
  let component: SeleccionListComponent;
  let fixture: ComponentFixture<SeleccionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeleccionListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeleccionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
