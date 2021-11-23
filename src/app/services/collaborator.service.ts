import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Collaborator} from "../collaborator";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class CollaboratorService {
  baseUrl = environment.rootApiUrl + 'collaborators/';

  constructor(private http: HttpClient) {
  }

  getAllCollaborator(): Observable<Collaborator []> {
    return this.http.get<Collaborator []>(this.baseUrl);
  }

  getCollaboratorDateEndIsNull(): Observable<Collaborator []> {
    return this.http.get<Collaborator []>(this.baseUrl + 'collaboratorDateEndIsNull');
  }

  getCollaboratorsFromSkill(skillId: number): Observable<Collaborator[]> {
    return this.http.get<Collaborator[]>(this.baseUrl + 'search/' + skillId);
  }

  createCollaborator(collaborator: Collaborator | undefined): Observable<Collaborator> {
    return this.http.post<Collaborator>(this.baseUrl + 'post/', collaborator);
  };

  getCollaboratorById(collaboratorId: number): Observable<Collaborator> {
    return this.http.get<Collaborator>(this.baseUrl + collaboratorId);
  };

  getCountCollaboratorActif() {
    return this.http.get(this.baseUrl + 'countcollaborator');
  }

  updateCollaborator(collaborator: Collaborator | undefined): Observable<Collaborator> {
    return this.http.put<Collaborator>(this.baseUrl + 'update/', collaborator);
  };

  updateEndDateCollaborator(collaborator: Collaborator) {
    return this.http.put(this.baseUrl + 'update/byId/' + collaborator.collaboratorId, collaborator);
  };


}//end






