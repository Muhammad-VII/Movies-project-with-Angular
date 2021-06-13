import { fade } from './../../animtaions';
import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-movies-header',
  templateUrl: './movies-header.component.html',
  styleUrls: ['./movies-header.component.scss'],
  animations: [fade]
})
export class MoviesHeaderComponent implements OnInit {

  constructor() { }
  @Input() parentData: any[] = [];
  imgUrl: string = `http://image.tmdb.org/t/p/w500/`;

  ngOnInit(): void {

  }
  
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 8
      }
    },
    nav: true,
    margin:8,
    animateOut: true
  }

}