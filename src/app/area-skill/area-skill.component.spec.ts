import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaSkillComponent } from './area-skill.component';

describe('AreaSkillComponent', () => {
  let component: AreaSkillComponent;
  let fixture: ComponentFixture<AreaSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
