import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentAComponent } from '../component-a/component-a.component';
import { ComponentBComponent } from '../component-b/component-b.component';
import { ParentComponentComponent } from '../parent-component/parent-component.component';
import { ChildComponentComponent } from '../child-component/child-component.component';
import { FormsModule } from '@angular/forms';
import { PassingdataComponent } from './passingdata.component';

describe('PassingdataComponent', () => {
  let component: PassingdataComponent;
  let fixture: ComponentFixture<PassingdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ PassingdataComponent,
                      ComponentAComponent,
                      ComponentBComponent,
                      ParentComponentComponent,
                      ChildComponentComponent
                     ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassingdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
