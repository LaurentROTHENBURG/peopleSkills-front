import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {Credentials} from "../model/credentials";
import {environment} from "../../environments/environment";
import {Jwt} from "../model/jwt";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  static readonly JWT_STORAGE_KEY = 'JWT_PEOPLESKILLS_API';
  private readonly AUTH_ENDPOINT = environment.rootApiUrl + 'authentication';
  private readonly USER_ENDPOINT = environment.rootApiUrl + '/admin/users';

  constructor(private http: HttpClient) {
  }

  signIn(credentials: Credentials): Observable<Jwt> {
    return this.http.post<Jwt>(this.AUTH_ENDPOINT + "/signin", credentials).pipe(
      tap(jwt => {
        sessionStorage.setItem(UserService.JWT_STORAGE_KEY, jwt.idToken);
      }));
  }

  signUp(user: User): Observable<any> {
    return this.http.post(this.AUTH_ENDPOINT + "/signup", user);
  }

  getPaginatedUsers(page: number, size: number): Observable<User[]> {
    const params = new HttpParams().set('page', page).set('size', size)
    return this.http.get<User[]>(this.USER_ENDPOINT, {params: params})
  }

  getTotalUsersCount(): Observable<number> {
    return this.http.get<number>(this.USER_ENDPOINT + '/count');
  }

  getRoles(): string[] {
    const jwt = sessionStorage.getItem(UserService.JWT_STORAGE_KEY);

    if (jwt) {
      // On décode la partie payload du token
      const tokenPayload = JSON.parse(atob(jwt.split('.')[1]));
      // On retourne les rôles
      return tokenPayload.auth.split(",")
    }
    return [];
  }

}
