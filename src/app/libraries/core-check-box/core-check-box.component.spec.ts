import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreCheckBoxComponent } from './core-check-box.component';

describe('CoreCheckBoxComponent', () => {
  let component: CoreCheckBoxComponent;
  let fixture: ComponentFixture<CoreCheckBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreCheckBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoreCheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
