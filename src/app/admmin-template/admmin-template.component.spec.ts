import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmminTemplateComponent } from './admmin-template.component';

describe('AdmminTemplateComponent', () => {
  let component: AdmminTemplateComponent;
  let fixture: ComponentFixture<AdmminTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmminTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmminTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
