import {Profil} from "./profil";
import {Department} from "./department";
import {CollaboratorSkill} from "./collaboratorSkill";


export interface Collaborator {
  collaboratorId: number;
  endDate: Date;
  firstName: string;
  language: string;
  mail: string;
  matricule: string;
  name: string;
  profession: string;
  startDate: Date;
   autoRating: number;
  profil: Profil;
  department: Department;
  collaboratorSkill: CollaboratorSkill
}
