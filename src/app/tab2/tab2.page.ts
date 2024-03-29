import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from
'@ionic/angular/standalone';
import { ExploreContainerComponent } from
'../explore-container/explore-container.component';
import { FacultyService } from '../faculty.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { logoLinkedin, logoGithub } from 'ionicons/icons';
@Component({
selector: 'app-tab2',
templateUrl: 'tab2.page.html',
styleUrls: ['tab2.page.scss'],
standalone: true,
imports: [ ExploreContainerComponent, IonicModule, CommonModule],

})
export class Tab2Page implements OnInit {
facultyMembers: any[]=[];
constructor(private facultyService: FacultyService) {
addIcons({ logoLinkedin, logoGithub});
}
ngOnInit(): void {
this.facultyMembers = this.facultyService.getFaculty();
}
}
