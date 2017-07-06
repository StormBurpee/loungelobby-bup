import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLoggedinComponent } from './header-loggedin.component';

describe('HeaderLoggedinComponent', () => {
  let component: HeaderLoggedinComponent;
  let fixture: ComponentFixture<HeaderLoggedinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderLoggedinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLoggedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
