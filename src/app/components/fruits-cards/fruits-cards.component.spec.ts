import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsCardsComponent } from './fruits-cards.component';

describe('FruitsCardsComponent', () => {
  let component: FruitsCardsComponent;
  let fixture: ComponentFixture<FruitsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitsCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
