import { Component, OnInit } from '@angular/core';
import {ProfilService} from "../services/profil.service";
import {Profil} from "../profil";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private profilService: ProfilService) { }

  profilList: Profil[] = [];

  ngOnInit(): void {
    this.profilService.getAllProfil().subscribe(result =>{
      this.profilList = result;
    })

  }

}
