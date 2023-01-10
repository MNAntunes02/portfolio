import { Component, OnInit } from '@angular/core';
import { faInstagram , faGithub , faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCoffee , faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  imageDisplay = "";

  faCoffee = faCoffee;
  faInstagram = faInstagram;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faArrowUpRightFromSquare = faArrowUpRightFromSquare;
  
  redeSelected = "";
  urlsRedes = "";

  constructor() { }

  ngOnInit(): void {
  }

  changeDisplayForInstagram(){
    this.imageDisplay = "Instagram"
    this.redeSelected = "Instagram"
    this.urlsRedes = "https://www.instagram.com/antunes_alissu/"
    console.log(this.redeSelected)
  }
  changeDisplayForGithub(){
    this.imageDisplay = "Github"
    this.redeSelected = "Github"
    this.urlsRedes = "https://github.com/MNAntunes02"
    console.log(this.redeSelected)
  }
  changeDisplayForLinkedin(){
    this.imageDisplay = "Linkedin"
    this.redeSelected = "Linkedin"
    this.urlsRedes = "https://www.linkedin.com/in/alisson-antunes-b150a924a/"
    console.log(this.redeSelected)
  }
}
