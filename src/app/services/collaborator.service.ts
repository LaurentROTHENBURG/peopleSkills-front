import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Collaborator} from "../collaborator";
import {Profil} from "../profil";
import {Department} from "../department";
import {Project} from "../project";

@Injectable({
  providedIn: 'root'
})
export class CollaboratorService {
  baseUrl = 'http://localhost:8080/collaborator/'

  constructor(private http: HttpClient) {
  }

  getAllCollaborator(): Observable<Collaborator []> {
    return this.http.get<Collaborator []>(this.baseUrl);
  }

  getSkillsForCollaborators(skillId: number): Observable<Collaborator[]> {
    return this.http.get<Collaborator[]>(this.baseUrl + 'search/' + skillId);
  }

  createCollaborator(collaborator: Collaborator | undefined): Observable<Collaborator> {
    return this.http.post<Collaborator>(this.baseUrl + 'post/', collaborator);
  };

  getAllProfil(): Observable<Profil []> {
    return this.http.get<Profil []>('http://localhost:8080/profil');
  };

  getAllDepartement(): Observable<Department []> {
    return this.http.get<Department []>('http://localhost:8080/department');
  };

  updateCollaborator(collaborator: Collaborator | undefined): Observable<Collaborator> {
    return this.http.put<Collaborator>(this.baseUrl + 'update/', collaborator);
  };

  getCollaboratorById(collaboratorId: number): Observable<Collaborator> {
    return this.http.get<Collaborator>(this.baseUrl + collaboratorId);
  };


}//end






