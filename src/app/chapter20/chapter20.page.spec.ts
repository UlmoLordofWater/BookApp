import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Chapter20Page } from './chapter20.page';

describe('Chapter20Page', () => {
  let component: Chapter20Page;
  let fixture: ComponentFixture<Chapter20Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter20Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Chapter20Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
