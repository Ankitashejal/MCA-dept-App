import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent ,IonFooter ,IonItem ,IonFabButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class Tab1Page {
  constructor() {}

  mainTitle : string = "Sardar Patel Institute of Technology";

aboutUs : string = `Right from it’s first year in
2009, S.P.I.T. has been one of the
sought college by students for MCA and
is renown for its ongoing courses.
Even though starting in year 2009 it
has managed to excel quickly and with
the highest cutoff this year it has
shown a growth among the students all
over.`

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
institute which will produce graduateengineers with global competency and
social sensitivity."`
}
