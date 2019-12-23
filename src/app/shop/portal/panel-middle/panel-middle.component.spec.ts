import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelMiddleComponent } from './panel-middle.component';

describe('PanelMiddleComponent', () => {
  let component: PanelMiddleComponent;
  let fixture: ComponentFixture<PanelMiddleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelMiddleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
