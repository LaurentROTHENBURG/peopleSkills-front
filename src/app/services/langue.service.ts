import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Langue} from "../langue";

@Injectable({
  providedIn: 'root'
})
export class LangueService {

  baseUrl = environment.rootApiUrl + 'langues/';

  constructor(private http: HttpClient) {
  }

  getAllLangue(): Observable<Langue []> {
    return this.http.get<Langue []>(this.baseUrl)
  }


}//end
