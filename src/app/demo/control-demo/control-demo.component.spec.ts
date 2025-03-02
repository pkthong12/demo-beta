import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlDemoComponent } from './control-demo.component';

describe('ControlDemoComponent', () => {
  let component: ControlDemoComponent;
  let fixture: ComponentFixture<ControlDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControlDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
