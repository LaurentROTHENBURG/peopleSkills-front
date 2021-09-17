import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Skill} from "../skill";
import {CollaboratorSkill} from "../collaboratorSkill";
import {Collaborator} from "../collaborator";

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  baseUrl = 'http://localhost:8080/skill/'

  constructor(private http: HttpClient) {
  }

  getAllSkill(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.baseUrl);
  };

  getSkillDateEndIsNull():  Observable<Skill[]>{
    return this.http.get<Skill[]>(this.baseUrl + 'skillDateEndIsNull');
  }

  getSkillbyArea(skillAreaId: number): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.baseUrl + 'byArea/' + skillAreaId);
  };

  // getSkillForOneCollaborator(collaboratorId: number): Observable<Skill[]> {
  //   return this.http.get<Skill[]>(this.baseUrl + 'byCollaborator/' + collaboratorId);
  // };

  // Requete sur collaborator_skill puis collaborator
  getSkillForOneCollaborator(collaboratorId: number): Observable<Skill[]> {
    return this.http.get<Skill[]>('http://localhost:8080/collaborator_skill/' + collaboratorId);
  };

  getPatrimoineSkill() {
    return this.http.get(this.baseUrl + '/patrimoineSkill');
  }
  getCountCollaboratorSkill() {
    return this.http.get('http://localhost:8080/collaborator_skill/countCollaboratorSkill');
  }

  createSKill(skill: Skill | undefined): Observable<Skill> {
    return this.http.post<Skill>(this.baseUrl + "post/", skill);
  };

  createSKillForOneCollaborator(collaboratorSkill: CollaboratorSkill | undefined): Observable<CollaboratorSkill> {
    return this.http.post<CollaboratorSkill>("http://localhost:8080/collaborator_skill/post", collaboratorSkill);
  };

  updateSKill(skill: Skill | undefined): Observable<Skill> {
    return this.http.put<Skill>(this.baseUrl + "update/", skill);
  };

  updateEndDateSkill(skill: Skill) {
    return this.http.put(this.baseUrl + 'update/byId/' + skill.skillId, skill);
  };

  deleteSkillById(skillId: number): Observable<any> {
    return this.http.delete(this.baseUrl + "delete/" + skillId);
  };

}//end
