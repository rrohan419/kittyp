import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KittypComponent } from './kittyp.component';

describe('KittypComponent', () => {
  let component: KittypComponent;
  let fixture: ComponentFixture<KittypComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KittypComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KittypComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
