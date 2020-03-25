import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ComponentAComponent } from './component-a.component';
import { DataServiceService } from "../data-service.service";
import { BehaviorSubject } from 'rxjs';
import { By } from '@angular/platform-browser';
import { CssSelector } from '@angular/compiler';
describe('ComponentAComponent', () => {
  let component: ComponentAComponent;
  let fixture: ComponentFixture<ComponentAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ ComponentAComponent ],
      providers: [
        { provide: DataServiceService, useClass: DataServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain an h3 tag', () => {
    const h3Element = fixture.debugElement.query(By.css('h3'));
    const nativeH3: HTMLHeadElement = h3Element.nativeElement;
    expect(nativeH3.textContent).toBe('component-a');
  });
  it('should contain a share content button', () => {
    const buttonEle = fixture.debugElement.query(By.css('button'));
    const nativeButton: HTMLButtonElement = buttonEle.nativeElement;
    expect(nativeButton.textContent).toBe('Share');
  });

  class DataServiceStub {
    private messagesourse = new BehaviorSubject<string>("default message");
    currentMessage = this.messagesourse.asObservable();
  }

  });
