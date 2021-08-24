import {CollaboratorSkill} from "./collaboratorSkill";
import {Area} from "./area";

export interface Skill {
  skillId: number;
  name: string;
  startDate: Date;
  endDate: Date;
  firstName: string;
  collaboratorSkill: CollaboratorSkill;
  skillArea: Area;
}
