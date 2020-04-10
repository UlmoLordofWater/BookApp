import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Chapter23Page } from './chapter23.page';

describe('Chapter23Page', () => {
  let component: Chapter23Page;
  let fixture: ComponentFixture<Chapter23Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter23Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Chapter23Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
