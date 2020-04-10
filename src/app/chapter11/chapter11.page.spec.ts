import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Chapter11Page } from './chapter11.page';

describe('Chapter11Page', () => {
  let component: Chapter11Page;
  let fixture: ComponentFixture<Chapter11Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter11Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Chapter11Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
