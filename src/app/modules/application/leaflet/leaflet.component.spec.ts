import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafletComponent } from './leaflet.component';
// import { ChartsModule } from 'ng2-charts';

describe('LeafletComponent', () => {
  let component: LeafletComponent;
  let fixture: ComponentFixture<LeafletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        // LeafletModule,
      ],
      declarations: [ LeafletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
