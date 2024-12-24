/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PublicComComponent } from './public-com.component';

describe('PublicComComponent', () => {
  let component: PublicComComponent;
  let fixture: ComponentFixture<PublicComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
