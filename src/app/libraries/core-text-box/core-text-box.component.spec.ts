import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreTextBoxComponent } from './core-text-box.component';

describe('CoreTextBoxComponent', () => {
  let component: CoreTextBoxComponent;
  let fixture: ComponentFixture<CoreTextBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreTextBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoreTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
