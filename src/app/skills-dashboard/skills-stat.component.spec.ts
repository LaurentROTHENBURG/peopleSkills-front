import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsStatComponent } from './skills-stat.component';

describe('SkillsStatComponent', () => {
  let component: SkillsStatComponent;
  let fixture: ComponentFixture<SkillsStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
