import {SkillArea} from "./skillArea";
import {Skills} from "./skills";

export interface Skill {
  skillId: number;
  name: string;
  startDate: Date;
  endDate: Date;
  skilArea: SkillArea;
  autoRating: number;
  skills : Skills
}
