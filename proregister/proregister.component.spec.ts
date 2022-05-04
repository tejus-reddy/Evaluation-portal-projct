import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProregisterComponent } from './proregister.component';

describe('ProregisterComponent', () => {
  let component: ProregisterComponent;
  let fixture: ComponentFixture<ProregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
