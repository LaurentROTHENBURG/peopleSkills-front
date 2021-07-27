import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Skill} from "../skill";
import {Area} from "../area";

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  baseUrl = 'http://localhost:8080/skill_area'

  constructor(private http: HttpClient) { }

  getAllArea(){
    return this.http.get<Area[]>(this.baseUrl)
  }


}//end
