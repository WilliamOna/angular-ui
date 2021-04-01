import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { RequestComponent } from './request.component';

describe('RequestComponent', () => {
  let component: RequestComponent; // component being tested
  let fixture: ComponentFixture<RequestComponent>; //testing environment for our components
  let debugElement: DebugElement;

  //We will reset our testing environment between tests, so that they are more loosely coupled
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestComponent);
    component = fixture.componentInstance; //create representation of actual component
    debugElement = fixture.debugElement; // represents html/css
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a request with an id of 1',()=>{
    expect(component.requestId).toBe(1);
  })
  it('should have a request with an item type of Chicken',()=>{
    expect(component.itemType).toContain("Chicken");
  })
  it('should have a request with a number of greater than 0',()=>{
    expect(component.numberOfItemsRequest).toBeGreaterThan(0);
  })
  it('should render the toggle button',()=>{
    expect(debugElement.query(By.css('#toggle-button')).nativeElement).toBeTruthy();
  })
  it('should render info upon being clicked, then hide info when clicked again',()=>{
    //check to make sure that content isn't there
    expect(component.isVisible).toBeFalsy();
    //call some method in order to display content
    component.toggle();
    // check to make sure that content is there
    expect(component.isVisible).toBeTruthy();
  })

  it('should display info when button is clicked',()=>{
    //test if div has hidden property
    expect(debugElement.query(By.css('#info')).nativeElement.hasAttribute('hidden')).toBe(true);
    //toggle that button
    component.toggle();
    //check to see if it was dispalyed properly
    expect(debugElement.query(By.css('#info')).nativeElement.innerText).toContain("requestId");
  })


});
