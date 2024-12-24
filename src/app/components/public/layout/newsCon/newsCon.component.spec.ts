/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewsConComponent } from './newsCon.component';

describe('NewsConComponent', () => {
  let component: NewsConComponent;
  let fixture: ComponentFixture<NewsConComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsConComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
