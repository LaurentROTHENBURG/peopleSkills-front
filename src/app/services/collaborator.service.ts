import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Collaborator} from "../collaborator";
import {Profil} from "../profil";
import {Department} from "../department";

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
  }

  getAllDepartement():Observable<Department []> {
    return this.http.get<Department []>('http://localhost:8080/department');
  }

  //Affichage  modal

  private modals: any[] = [];

  add(modal: any) {
    // add modal to array of active modals
    this.modals.push(modal);
  }


}//end






