import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniProjetComponent } from './mini-projet.component';

describe('MiniProjetComponent', () => {
  let component: MiniProjetComponent;
  let fixture: ComponentFixture<MiniProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniProjetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
