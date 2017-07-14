import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetBlackMetalComponent } from './budget-black-metal.component';

describe('BudgetBlackMetalComponent', () => {
  let component: BudgetBlackMetalComponent;
  let fixture: ComponentFixture<BudgetBlackMetalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetBlackMetalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetBlackMetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
