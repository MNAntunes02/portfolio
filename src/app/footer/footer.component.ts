import { Component, OnInit } from '@angular/core';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { mdiTailwind } from '@mdi/js';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faAngular = faAngular;
  mdiTailwind = mdiTailwind;

  constructor() { }

  ngOnInit(): void {
    console.log(this.mdiTailwind)
  }

}
