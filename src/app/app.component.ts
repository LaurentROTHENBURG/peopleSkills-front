import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UserService} from "./services/user.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'peopleskills-front';

  constructor(private http: HttpClient, private router: Router) {

  }

  logout(): void {
    sessionStorage.clear();
  }


  getUser(): string[] {
    const jwt = sessionStorage.getItem(UserService.JWT_STORAGE_KEY);

    if (jwt) {
      // On décode la partie payload du token
      const tokenPayload = JSON.parse(atob(jwt.split('.')[1]));
      // On retourne les rôles
      return tokenPayload.sub;
    }
    return [];
  }

}//end
