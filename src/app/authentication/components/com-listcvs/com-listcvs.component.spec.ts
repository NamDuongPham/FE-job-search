/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComListcvsComponent } from './com-listcvs.component';

describe('ComListcvsComponent', () => {
  let component: ComListcvsComponent;
  let fixture: ComponentFixture<ComListcvsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComListcvsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComListcvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
