import { DOCUMENT } from '@angular/common';
import { Component, OnInit , AfterViewInit , ViewChild , ElementRef, ViewChildren, QueryList, Inject } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-sobre-mim',
  templateUrl: './sobre-mim.component.html',
  styleUrls: ['./sobre-mim.component.css']
})
export class SobreMimComponent implements OnInit , AfterViewInit {

  @ViewChildren('icon1') icon1! : QueryList<ElementRef<HTMLDivElement>>;
  @ViewChildren('circle1') circle1! : QueryList<ElementRef<HTMLDivElement>>;
  @ViewChildren('icon2') icon2! : QueryList<ElementRef<HTMLDivElement>>;
  @ViewChildren('circle2') circle2! : QueryList<ElementRef<HTMLDivElement>>;
  @ViewChildren('icon3') icon3! : QueryList<ElementRef<HTMLDivElement>>;
  @ViewChildren('circle3') circle3! : QueryList<ElementRef<HTMLDivElement>>;

  @ViewChild('notebook') notebook! : ElementRef<HTMLImageElement>
  @ViewChild('cafe') cafe! : ElementRef<HTMLImageElement>
  @ViewChild('celular') celular! : ElementRef<HTMLImageElement>
  @ViewChild('mesa') mesa! : ElementRef<HTMLDivElement>

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){

    //animação das tecnologias =================================================================
    this.circle1.forEach((circle: ElementRef<HTMLDivElement>) => {
      gsap.to(circle.nativeElement , {rotation: -360, ease: "none", repeat: -1, duration: 45});
    })
    this.icon1.forEach((icon: ElementRef<HTMLDivElement>) => {
      gsap.to(icon.nativeElement , {rotation: 360, ease: "none", repeat: -1, duration: 60});
    })

    this.circle2.forEach((circle: ElementRef<HTMLDivElement>) => {
      gsap.to(circle.nativeElement , {rotation: 360, ease: "none", repeat: -1, duration: 90});
    })
    this.icon2.forEach((icon: ElementRef<HTMLDivElement>) => {
      gsap.to(icon.nativeElement , {rotation: -360, ease: "none", repeat: -1, duration: 180});
    })

    this.circle3.forEach((circle: ElementRef<HTMLDivElement>) => {
      gsap.to(circle.nativeElement , {rotation: -360, ease: "none", repeat: -1, duration: 180});
    })
    this.icon3.forEach((icon: ElementRef<HTMLDivElement>) => {
      gsap.to(icon.nativeElement , {rotation: 360, ease: "none", repeat: -1, duration: 180});
    })
    //==========================================================================================


    gsap.timeline({
      scrollTrigger: {
        trigger: this.mesa.nativeElement,
        start: "center bottom",
        end: "top top",
        scrub: true
      }
    })
    .to(this.notebook.nativeElement ,   { yPercent: 50 , xPercent: 120 , rotation: 0}, 0)
    .to(this.celular.nativeElement ,    { yPercent: 100 , xPercent: -400, rotation: -45 }, 0)
    .to(this.cafe.nativeElement ,       { yPercent: -150 , xPercent: -500, rotation: -40 }, 0)
  }

}
