import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/header/header.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { colleaguesSaysComponent } from '../collage-says/colleagues-says.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';



@Component({
  selector: 'app-maincomponent',
  imports: [ HeaderComponent, AboutMeComponent, SkillsComponent, ProjectsComponent, colleaguesSaysComponent, ContactMeComponent,  CommonModule ],
  templateUrl: './maincomponent.component.html',
  styleUrl: './maincomponent.component.scss'
})
export class MaincomponentComponent {

}
