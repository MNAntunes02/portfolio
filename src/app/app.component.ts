import { Component, ElementRef, OnInit, ViewChild , AfterViewInit } from '@angular/core';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  faBars = faBars;
  faClose = faClose;

  @ViewChild('check') check! : ElementRef<HTMLInputElement>
  menu: boolean = false;

  title = 'portfolio';

  ngOnInit(){
    AOS.init();
    window.addEventListener('load', AOS.refresh)
  }

  changeChecked(){
    if (this.check.nativeElement.checked) {
      this.menu = true
    }
    else{
      this.menu = false
    }
    console.log(this.check.nativeElement.checked)
    console.log(this.menu)
  }
  
}
