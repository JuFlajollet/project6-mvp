import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTopicCardComponent } from './list-topic-card.component';

describe('ListTopicCardComponent', () => {
  let component: ListTopicCardComponent;
  let fixture: ComponentFixture<ListTopicCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTopicCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTopicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
