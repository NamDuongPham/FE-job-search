/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ResComComponent } from './res-com.component';

describe('ResComComponent', () => {
  let component: ResComComponent;
  let fixture: ComponentFixture<ResComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
