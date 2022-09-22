import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JurassicWordDominioPage } from './jurassic-word-dominio.page';

describe('JurassicWordDominioPage', () => {
  let component: JurassicWordDominioPage;
  let fixture: ComponentFixture<JurassicWordDominioPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JurassicWordDominioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JurassicWordDominioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
