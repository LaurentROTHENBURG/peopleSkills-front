import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsSettingComponent } from './skills-setting.component';

describe('SkillsSettingComponent', () => {
  let component: SkillsSettingComponent;
  let fixture: ComponentFixture<SkillsSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
