import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Profil} from "../profil";
import {Collaborator} from "../collaborator";

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  baseUrl = environment.rootApiUrl + 'profils/';

  constructor(private http: HttpClient) { }

  getAllProfil() : Observable<Profil []>{
    return this.http.get <Profil []>(this.baseUrl);
  }

  createProfil(profil: Profil | undefined): Observable<Profil> {
    return this.http.post<Profil>(this.baseUrl + 'post', profil);
  };


}//end
