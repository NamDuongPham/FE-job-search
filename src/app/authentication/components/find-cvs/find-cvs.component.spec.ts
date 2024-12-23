/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FindCvsComponent } from './find-cvs.component';

describe('FindCvsComponent', () => {
  let component: FindCvsComponent;
  let fixture: ComponentFixture<FindCvsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCvsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
