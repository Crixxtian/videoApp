import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoutorEstranhoMultiversoDaLoucuraPage } from './doutor-estranho-multiverso-da-loucura.page';

describe('DoutorEstranhoMultiversoDaLoucuraPage', () => {
  let component: DoutorEstranhoMultiversoDaLoucuraPage;
  let fixture: ComponentFixture<DoutorEstranhoMultiversoDaLoucuraPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DoutorEstranhoMultiversoDaLoucuraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoutorEstranhoMultiversoDaLoucuraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
