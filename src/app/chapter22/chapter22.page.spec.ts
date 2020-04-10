import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Chapter22Page } from './chapter22.page';

describe('Chapter22Page', () => {
  let component: Chapter22Page;
  let fixture: ComponentFixture<Chapter22Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter22Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Chapter22Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
