import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecettesManagerComponent } from './recettes-manager.component';

describe('RecettesManagerComponent', () => {
  let component: RecettesManagerComponent;
  let fixture: ComponentFixture<RecettesManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecettesManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecettesManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
