import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubcribersComponent } from './subcribers.component';

describe('SubcribersComponent', () => {
  let component: SubcribersComponent;
  let fixture: ComponentFixture<SubcribersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcribersComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubcribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
