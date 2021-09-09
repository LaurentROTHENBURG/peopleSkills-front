import {Skill} from "./skill";
import {Collaborator} from "./collaborator";

export  interface CollaboratorSkill {
  collaboratorSkillId: number;
  autoRating: number;
  favouriteSkill: number;
  skill : Skill;
  collaborator : Collaborator;
}
