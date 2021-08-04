import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Collaborator} from "../collaborator";
import {Skill} from "../skill";


@Injectable({
  providedIn: 'root'
})
export class CollaboratorService {
  baseUrl = 'http://localhost:8080/collaborator/'

  constructor(private http: HttpClient) { }

  getAllCollaborator(): Observable<Collaborator []>{
    return this.http.get<Collaborator []>(this.baseUrl);
}

  getSkillsForCollaborators(skillId: number) : Observable<Collaborator[]>{
    return this.http.get<Collaborator[]>(this.baseUrl + 'search/' + skillId);
  }

  createCollaborator(collaborator: Collaborator | undefined) : Observable<Collaborator>{
    return this.http.post<Collaborator>(this.baseUrl + 'post/', collaborator);
  };


}//end






