import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Department} from "../department";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  baseUrl = environment.rootApiUrl + 'departments/';

  constructor(private http: HttpClient) { }

  getAllDepartement() : Observable<Department []>{
    return this.http.get <Department []>(this.baseUrl);
  }


}//end
