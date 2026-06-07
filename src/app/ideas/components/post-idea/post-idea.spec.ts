import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostIdea } from './post-idea';

describe('PostIdea', () => {
  let component: PostIdea;
  let fixture: ComponentFixture<PostIdea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostIdea],
    }).compileComponents();

    fixture = TestBed.createComponent(PostIdea);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
