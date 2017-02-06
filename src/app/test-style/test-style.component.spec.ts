/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestStyleComponent } from './test-style.component';

describe('TestStyleComponent', () => {
  let component: TestStyleComponent;
  let fixture: ComponentFixture<TestStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
