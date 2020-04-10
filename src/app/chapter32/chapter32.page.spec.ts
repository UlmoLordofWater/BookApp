import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Chapter32Page } from './chapter32.page';

describe('Chapter32Page', () => {
  let component: Chapter32Page;
  let fixture: ComponentFixture<Chapter32Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter32Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Chapter32Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
