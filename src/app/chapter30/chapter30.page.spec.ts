import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Chapter30Page } from './chapter30.page';

describe('Chapter30Page', () => {
  let component: Chapter30Page;
  let fixture: ComponentFixture<Chapter30Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter30Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Chapter30Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
