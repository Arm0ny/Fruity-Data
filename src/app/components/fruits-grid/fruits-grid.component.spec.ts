import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsGridComponent } from './fruits-grid.component';

describe('FruitsCardsComponent', () => {
  let component: FruitsGridComponent;
  let fixture: ComponentFixture<FruitsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitsGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
