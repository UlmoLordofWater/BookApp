import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Chapter31Page } from './chapter31.page';

describe('Chapter31Page', () => {
  let component: Chapter31Page;
  let fixture: ComponentFixture<Chapter31Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter31Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Chapter31Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
