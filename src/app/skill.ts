import {CollaboratorSkill} from "./collaboratorSkill";

export interface Skill {
  skillId: number;
  name: string;
  startDate: Date;
  endDate: Date;
  firstName: string;
  autoRating: number;
  collaboratorSkill: CollaboratorSkill;
}
