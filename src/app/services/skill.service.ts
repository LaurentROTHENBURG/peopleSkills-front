import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Skill} from "../skill";
import {CollaboratorSkill} from "../collaboratorSkill";

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

  getSkillbyArea(skillAreaId: number): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.baseUrl + 'byArea/' + skillAreaId);
  };

  getSkillForOneCollaborator(collaboratorId: number): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.baseUrl + 'byCollaborator/' + collaboratorId);
  };

  getSkillsForCollaborators(skillId: number): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.baseUrl + 'search/' + skillId);
  }

  getPatrimoineSkill() {
    return this.http.get(this.baseUrl + '/patrimoineSkill')
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

  deleteSkillById(skillId: number): Observable<any> {
    return this.http.delete(this.baseUrl + "delete/" + skillId);
  };

}//end
