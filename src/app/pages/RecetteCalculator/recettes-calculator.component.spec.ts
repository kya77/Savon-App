import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecettesCalculatorComponent } from './recettes-calculator.component';

describe('RecettesCalculatorComponent', () => {
  let component: RecettesCalculatorComponent;
  let fixture: ComponentFixture<RecettesCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecettesCalculatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecettesCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
