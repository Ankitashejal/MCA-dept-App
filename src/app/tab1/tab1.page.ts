import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent ,IonFooter ,IonItem ,IonFabButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonicModule } from '@ionic/angular';

// import Swiper from 'swiper';
// import { SwiperComponent } from './swiper/swiper.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule]
})
// export class Tab1Page implements OnInit {
//   slides : any[] = [];
//   constructor() {} 
//   ngOnInit():void {
//     this.slides = [
//      {swiper:'assets/images/banner1.jpg'},
//      {Swiper:'assets/images/banner2.jpg'},
//      {Swiper:'assets/images/banner3.jpg'},

//   ]
//   }

//   }
//   {



export class Tab1Page {
  constructor() { }
  mainTitle: string = "Sardar Patel Institute of Technology";
  aboutUs: string = `Right from it’s first year in 2009, S.P.I.T. has been one of the 
  sought college by students for MCA and is renown for its ongoing courses.
Even though starting in year 2009 it has managed to excel quickly and with
the highest cutoff this year it has shown a growth among the students allover.`
  visionTxt = `Keeping in view the
growing and changing needs of Industry
and society, we at S.P.I.T. are
committed to creating an environment
which will raise the intellectual and
moral standards of our students. Our
endeavor is to strive for the overall
development of students, thereby
enabling them to accept challenges. In
tune with this our vision is`
  visionMain = `"To build a renowned
institute which will produce graduate
engineers with global competency and
social sensitivity."`
  missionList = [
    `"Provide high
quality education in engineering and
technology promoting the Indian Values
and Ethos that will prepare the
participants to lead lives of personal
integrity and civic responsibility in
a global society."`,
    `Promote an
Educational Environment that combines
academic study with the excitement of
intellectual curiosity for engineers
of tomorrow.`,
    `Enhance career
opportunities for students through
Industry-Institute interaction, valueadded
courses and projects in cutting edge technology.`,
    ` Focus on applied research to create next generation technologies.`];
   
}