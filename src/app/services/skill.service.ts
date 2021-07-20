import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Skill} from "../skill";


@Injectable({
  providedIn: 'root'
})
export class SkillService {
  baseUrl = 'http://localhost:8080/skill/'

  constructor(private http: HttpClient) {
  }

  getAllSkill() {
    return this.http.get<Skill[]>(this.baseUrl);
  }

  deleteSkillById(skillId: number) {
    this.http.delete(this.baseUrl + "delete/" + skillId).subscribe();
  }

  createSKill(skill: Skill) {
    this.http.post(this.baseUrl, skill);
  }
}
