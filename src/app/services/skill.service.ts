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

  getAllSkill() {
    return this.http.get<Skill[]>(this.baseUrl);
  };

  getSkillbyArea(skillAreaId: number): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.baseUrl + 'byArea/' + skillAreaId);
  };

  getSkillForOneCollaborator(collaboratorId: number) : Observable<Skill[]>{
    return this.http.get<Skill[]>(this.baseUrl + 'byCollaborator/' + collaboratorId);
  };

  createSKill(skill: Skill | undefined): Observable<Skill> {
    return this.http.post<Skill>(this.baseUrl + "post/", skill);
  };

  createSKillForOnCollaborator(collaboratorSkill: CollaboratorSkill | undefined) : Observable<CollaboratorSkill>{
    return this.http.post<CollaboratorSkill>(this.baseUrl + "collaborator_skill/", collaboratorSkill );
  };

  updateSKill(skill: Skill | undefined): Observable<Skill> {
    return this.http.put<Skill>(this.baseUrl + "update/", skill);
  };

  deleteSkillById(skillId: number) {
    this.http.delete(this.baseUrl + "delete/" + skillId).subscribe();
  };







}//end
