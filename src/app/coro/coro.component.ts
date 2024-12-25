import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-coro',
  imports: [],
  templateUrl: './coro.component.html',
  styleUrl: './coro.component.scss'
})
export class CoroComponent {
  @Input() data:any;
customOptions: any;
}
