import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpCheckerComponent } from './ip-checker.component';

describe('IpCheckerComponent', () => {
  let component: IpCheckerComponent;
  let fixture: ComponentFixture<IpCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpCheckerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
