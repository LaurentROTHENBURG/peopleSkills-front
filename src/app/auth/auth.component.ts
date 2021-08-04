import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import {AuthService} from "../services/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authStatus: boolean | undefined;

  @Output() email : EventEmitter<any> = new EventEmitter();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;

  }
  onSignIn() {
    this.authService.signIn().then(
      ()=>{
        console.log('Authentification reussie');
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['skill']);
      }
    );
  }
  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }

  displayUserLogin(){
    this.email.emit('Evènement qui affiche Laurent');
      }

}//end
