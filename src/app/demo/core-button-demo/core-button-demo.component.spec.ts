import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreButtonDemoComponent } from './core-button-demo.component';

describe('CoreButtonDemoComponent', () => {
  let component: CoreButtonDemoComponent;
  let fixture: ComponentFixture<CoreButtonDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreButtonDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreButtonDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
