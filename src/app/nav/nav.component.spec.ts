import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { Test1Component } from '../test1/test1.component';
import { PassingdataComponent } from '../passingdata/passingdata.component';
import { ComponentAComponent } from '../component-a/component-a.component';
import { ComponentBComponent } from '../component-b/component-b.component';
import { ParentComponentComponent } from '../parent-component/parent-component.component';
import { ChildComponentComponent } from '../child-component/child-component.component';
import { NavComponent } from './nav.component';
import { By } from '@angular/platform-browser';
import {Location} from '@angular/common';
describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes(
         [
            {
              path: 'test1',
              component: Test1Component
            },
            {
              path: 'passing-data',
              component: PassingdataComponent
            }
          ]
          )
    ],
      declarations: [
                      NavComponent,
                      Test1Component,
                      PassingdataComponent,
                      ComponentAComponent,
                      ComponentBComponent,
                      ParentComponentComponent,
                      ChildComponentComponent
                     ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should test if theres links', () => {
    const links = fixture.debugElement.queryAll(By.css('a'));
    expect(links.length >= 2).toBeTruthy();
  });
  it('should test if link one contain test1', () => {
    const links = fixture.debugElement.queryAll(By.css('a'));
    const nativeLink: HTMLLinkElement = links[0].nativeElement;
    expect(nativeLink.textContent).toBe('Test 1');
  });
  it('should test if link Two contain Passing data', () => {
    const links = fixture.debugElement.queryAll(By.css('a'));
    const nativeLink: HTMLLinkElement = links[1].nativeElement;
    expect(nativeLink.textContent).toBe('Passing data');
  });
  it ('should navigate to Test1 page on cliking the test1 button', () => {
    const location = TestBed.get(Location);
    const linkDestination = fixture.debugElement.queryAll(By.css('a'));
    const nativeLink: HTMLLinkElement = linkDestination[0].nativeElement;
    nativeLink.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/test1');
    });
  });
  it ('should navigate to /passing-data page on cliking the Passing data button', () => {
    const location = TestBed.get(Location);
    const linkDestination = fixture.debugElement.queryAll(By.css('a'));
    const nativeLink: HTMLLinkElement = linkDestination[1].nativeElement;
    nativeLink.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/passing-data');
    });
  });
 });



