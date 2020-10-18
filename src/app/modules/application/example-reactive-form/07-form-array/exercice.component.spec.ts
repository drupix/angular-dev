import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ExerciceComponent } from './exercice.component';
import { PrettyJsonPipe } from './pretty-json.pipe';

describe('ExerciceComponent ReactiveForm 07-form-array', () => {
  let component: ExerciceComponent;
  let fixture: ComponentFixture<ExerciceComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [
        ExerciceComponent,
        PrettyJsonPipe
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
