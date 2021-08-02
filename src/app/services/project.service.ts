import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Project} from "../project";
import {Skill} from "../skill";

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

  createProject(project : Project | undefined) : Observable<Project>{
    return this.http.post<Project>(this.baseUrl + "post/", project);
  }

}//end
