import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit, input } from '@angular/core';
import { IonicModule, IonicSlides } from '@ionic/angular';


@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
  standalone:true,
  imports: [CommonModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SwiperComponent  implements OnInit {
 @Input () swiper: any[] = [];
 swiperModules=[IonicSlides];
slides: any;

  constructor() { }

  ngOnInit() {}

}
