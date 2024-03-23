import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';


@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrl: './categoria-list.component.scss',
  providers: [{ provide: CarouselConfig, useValue: { interval: 3000, noPause: true, showIndicators: true } }]
})

export class CategoriaListComponent {
  images = [
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQlHSzD4dJwGmCKo41I5mRs0tY1sLiv3r18A&usqp=CAU', title: 'Image 1', description: 'Description for Image 1' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQlHSzD4dJwGmCKo41I5mRs0tY1sLiv3r18A&usqp=CAU', title: 'Image 2', description: 'Description for Image 2' },
    { src: 'assets/image3.jpg', title: 'Image 3', description: 'Description for Image 3' }
  ];
}



