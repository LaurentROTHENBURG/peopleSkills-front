import {Skill} from "./skill";
import {Collaborator} from "./collaborator";

export  interface CollaboratorSkill {
  collaboratorSkillId: number;
  autoRating: number;
  collaboratorIdx: number;
  favouriteSkill: number;
  obtentionDate : Date;
  skillIdx: number;
  skill : Skill;
  collaborator : Collaborator;
}
