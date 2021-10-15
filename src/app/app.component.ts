import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";


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

}//end
