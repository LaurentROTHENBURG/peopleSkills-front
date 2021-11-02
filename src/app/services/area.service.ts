import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SkillArea} from "../skillArea";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  baseUrl = environment.rootApiUrl + 'skill_areas'

  constructor(private http: HttpClient) { }

  getAllArea(){
    return this.http.get<SkillArea[]>(this.baseUrl)
  }


}//end
