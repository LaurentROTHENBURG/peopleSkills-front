import {CollaboratorSkill} from "./collaboratorSkill";
import {SkillArea} from "./skillArea";

export interface Skill {
  skillId: number;
  name: string;
  startDate: Date;
  endDate: Date;
  skilArea: SkillArea;
  collaboratorSkill: CollaboratorSkill;
}
