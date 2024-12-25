import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoroComponent } from './coro.component';

describe('CoroComponent', () => {
  let component: CoroComponent;
  let fixture: ComponentFixture<CoroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
