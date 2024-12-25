import { Component } from '@angular/core';
import { CoroComponent } from "../../coro/coro.component";
import { NavbarComponent } from "../../navbar/navbar.component";
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [CarouselModule,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag:  true,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
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
        items: 2
      }
    },
    nav: true
  }
slides=
[
  {
    id: 1,
    image: 'https://imgs.search.brave.com/YmXiyleD5jCY6aH53F69_kwHZRLz3MkgGIh5uCaFQeQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlLW1haGFyYWph/cy5jb20vYXNzZXRz/L2ltZy9kZXN0aW5h/dGlvbi9kZXN0aW5h/dGlvbl9pbWc2Lmpw/Zw',
    alt: 'Slide 1',
  },
  {
    id: 2,
    image: 'https://imgs.search.brave.com/x3cu57h2Tor5ZyI-96tt3ruxH7jpBgcvpKbmlmIVsgE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/NTA2NDkyOC9waG90/by90b3VyaXN0LXJp/ZGluZy1jYW1lbC1p/bi1kZXNlcnQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPXpa/cFM1U3hnQk5GaEk1/a2Itb0JuZjJDTDRS/eUJjUktnQ0dySW10/S3M3ZHc9',
    alt: 'Slide 2',
  },
  {
    id: 3,
    image: 'https://imgs.search.brave.com/qQfJ5L5XY0ypW0ymsdUmByPQbNw2B1OOVtt7OTcn5Yc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM3/MjEwNDcwMS9waG90/by90b3VyaXN0LWlu/LWFncmEtaW5kaWEu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWhlOXBIZzZobWRV/NVhzQmtObm16ZDRR/N1BCWERNVENaNG5f/cE81ZWFYS3M9',
    alt: 'Slide 3',
  },
]
}
