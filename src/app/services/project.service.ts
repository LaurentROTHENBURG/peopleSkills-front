import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Project} from "../project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  baseUrl = 'http://localhost:8080/project/'

  constructor(private http: HttpClient) {
  }

  getProjectForOneCollaborator(collaboratorId: number): Observable<Project[]> {
    return this.http.get<Project[]>(this.baseUrl + 'byProject/' + collaboratorId);
  };

  getProjectById(projectId: number): Observable<Project> {
    return this.http.get<Project>(this.baseUrl + projectId);
  };


}//end
