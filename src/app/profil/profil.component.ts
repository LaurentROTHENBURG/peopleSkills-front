import {Component, OnInit} from '@angular/core';
import {ProfilService} from "../services/profil.service";
import {Profil} from "../profil";
import {FormBuilder, Validators} from "@angular/forms";


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  showProfilModal: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private profilService: ProfilService) {
  }

  profil: Profil | undefined;

  createProfilForm = this.formBuilder.group({
    profilId: 0,
    codification: ['', Validators.required],
    language: 'FR'
  })

  profilList: Profil[] = [];

  ngOnInit(): void {
    this.profilService.getAllProfil().subscribe(result => {
      this.profilList = result;
    })
  }

  openModal() {
    this.showProfilModal = true;
  }

  closeModal() {
    this.showProfilModal = false;
    this.createProfilForm.reset({
        codification: '',
        langage: ''
      }
    )
  }

  onProfilCreate() {
    this.profil = this.createProfilForm.value;
    this.profilService.createProfil(this.profil).subscribe(() => {
        this.refreshProfil()
      },
      () => {
        alert("Erreur lors de la création");
      }
    );
    this.showProfilModal = false;
  }

  refreshProfil() {
    this.profilService.getAllProfil().subscribe(
      result => {
        this.profilList = result;
      }
    )
  };

  public getRowsProfil() {
    return this.profilList.length;
  }


}
