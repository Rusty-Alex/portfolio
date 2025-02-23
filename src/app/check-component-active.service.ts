import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckComponentActiveService {
  private visibilityMap = new BehaviorSubject<{ [key: string]: boolean }>({});
  visibility$ = this.visibilityMap.asObservable();
  aboutActive: boolean = false;
  skillsActive: boolean = false;
  projectsActive: boolean = false;
  contactActive: boolean = false;
  colleaguesSays: boolean = false;

  updateVisibility(componentId: string, isVisible: boolean) {
    if (isVisible) {

      this.activateComponent(componentId);
    }
  }

  private activateComponent(componentId: string) {
    switch (componentId) {
      case 'aboutMe':
        if (!this.aboutActive) {
          this.aboutActive = true;
          console.log('aboutActive', this.aboutActive);
        }
        break;
  
      case 'skills':
        if (!this.skillsActive) {
          this.skillsActive = true;
          console.log('skillsActive', this.skillsActive);
        }
        break;
  
      case 'projects':
        if (!this.projectsActive) {
          this.projectsActive = true;
          console.log('projectsActive', this.projectsActive);
        }
        break;
  
      case 'colleaguesSays':
        if (!this.colleaguesSays) {
          this.colleaguesSays = true;
          console.log('colleaguesSays', this.colleaguesSays);
        }
        break;
  
      case 'contact':
        if (!this.contactActive) {
          this.contactActive = true;
          console.log('contactActive', this.contactActive);
        }
        break;
  
      default:
        console.warn('Unbekannte Komponente:', componentId);
        break;
    }
  }
  
}
