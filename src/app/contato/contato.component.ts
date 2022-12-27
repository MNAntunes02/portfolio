import { Component, OnInit } from '@angular/core';
import { faInstagram , faGithub , faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  imageDisplay:any = "";

  faCoffee = faCoffee;
  faInstagram = faInstagram;
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  constructor() { }

  ngOnInit(): void {
  }

  changeDisplayForInstagram(){
    this.imageDisplay = "Instagram"
  }
  changeDisplayForGithub(){
    this.imageDisplay = "Github"
  }
  changeDisplayForLinkedin(){
    this.imageDisplay = "Linkedin"
  }
}
