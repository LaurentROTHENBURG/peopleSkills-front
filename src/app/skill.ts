import {CollaboratorSkill} from "./collaboratorSkill";

export interface Skill {
  skillId: number;
  name: string;
  startDate: Date;
  endDate: Date;
  firtsName: string;
  collaboratorSkill: CollaboratorSkill;

  //autoRating: number;
}
