import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Chapter12Page } from './chapter12.page';

describe('Chapter12Page', () => {
  let component: Chapter12Page;
  let fixture: ComponentFixture<Chapter12Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter12Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Chapter12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
