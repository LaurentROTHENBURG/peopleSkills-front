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


  //Affichage  modal

  private modals: any[] = [];

  open(id: string) {
    // open modal specified by id
    const modal = this.modals.find(x => x.id === id);
    modal.open();
  }

  close(id: string) {
    // close modal specified by id
    const modal = this.modals.find(x => x.id === id);
    modal.close();
  }

  add(modal: any) {
    // add modal to array of active modals
    this.modals.push(modal);
  }

  remove(id: string) {
    // remove modal from array of active modals
    this.modals = this.modals.filter(x => x.id !== id);
  }


}//end






