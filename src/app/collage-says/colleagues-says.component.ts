import { Component,  } from '@angular/core';
import { MainVariableService } from '../main-variable.service';
import { CommonModule } from '@angular/common';
import { Says } from '../projects';
import { CheckComponentActiveService } from '../check-component-active.service';

@Component({
  selector: 'app-colleagues-says',
  imports: [CommonModule],
  templateUrl: './colleagues-says.component.html',
  styleUrl: './says.component.scss'
})
export class colleaguesSaysComponent {
  constructor(public mainVariableService: MainVariableService, public checkComponentActiveService: CheckComponentActiveService) {

   }  

  items: Says[] = [{
        englishSay: "Alexander has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.",
        germanSay: "Alexander hat sich als verlässlicher Gruppenpartner bewiesen. Seine technischen Fähigkeiten und seine proaktive Einstellung waren für den Erfolg unserer Projekte wichtig.",
        name: "B.Noori",
        team: "Team Partner"
      },
      {
        englishSay: "I had the good fortune to work with Alexander in a group project at the Developer Akademie that involved a lot of effort. He always stayed calm, cool, and focused and made sure our team was set up for success. He was super knowledgeable, easy to work with, and I'd happily work with him again given the chance.",
        germanSay: "Ich hatte das Glück, mit Alexander in einem Gruppenprojekt an der Developer Akademie zusammenzuarbeiten, das mit viel Aufwand verbunden war. Er blieb immer ruhig, cool und fokussiert und stellte sicher, dass unser Team für den Erfolg gerüstet war. Er war super sachkundig, es war einfach mit ihm zu arbeiten und ich würde gerne wieder mit ihm zusammenarbeiten, wenn ich die Chance dazu hätte.",
        name: "G.Singh",
        team: "Developer Akademie"
      },
      {
        englishSay: "Our project benefited enormously from Alexander's way of working.",
        germanSay: "Unser Projekt hat enorm von Alexanders Arbeitsweise profitiert.",
        name: "A.Preis",
        team: "Team Partner"
      }]; 
  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
  }

  getTransform(index: number) {
    const positions = ['left', 'center', 'right'];
    return positions[(index - this.currentIndex + this.items.length) % this.items.length];
  }
  }


