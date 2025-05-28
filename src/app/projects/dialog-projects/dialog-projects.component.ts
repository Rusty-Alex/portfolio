import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Projects } from '../../projects'
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MainVariableService } from '../../main-variable.service';

@Component({
  selector: 'app-dialog-projects',
  imports: [],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss'
})
export class DialogProjectsComponent {
  public index!: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { index: number }, public mainVariableService: MainVariableService, public dialog: MatDialog) {
    this.index = data.index;
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  nextProject() {
    if (this.index == 3) {
      this.index = -1;
    }

    this.index++;
  }

  projects: Projects[] = [
    {
      titleNumber: "01",
      title: 'Join',
      image: 'JoinBig.png',
      englishDescription: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      germanDescription: "Aufgabenmanager nach dem Vorbild des Kanban-Systems. Erstellen und organisieren Sie Aufgaben mit Hilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu. ",
      github: 'https://github.com/Rusty-Alex/join',
      liveTest: 'https://development-winkler.de',
      online: true
    },

    {
      titleNumber: "02",
      title: 'El Pollo Loco',
      image: 'eplBig.png',
      germanDescription: 'Sprung-, Lauf- und Wurfspiel, das auf einem objektorientierten Ansatz basiert. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen die verrückte Henne zu kämpfen.',
      englishDescription: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      github: 'https://github.com/Rusty-Alex/epl',
      liveTest: 'https://web-development-winkler.de',
      online: true
    },

    {
      titleNumber: "03",
      title: 'DABubble',
      image: 'DabubbleBig.png',
      germanDescription: 'Diese App ist ein Slack Clone App. Es revolutioniert die Team-Kommunikation und die Zusammenarbeit mit seiner intuitiven Schnittstelle, Echtzeit-Messaging, und robuste Kanalorganisation.',
      englishDescription: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      github: 'https://github.com/Alumni-Projects/SlackClone',
      liveTest: 'test1.de',
      online: false
    },

    {
      titleNumber: "04",
      title: 'Sonnenschein ',
      image: 'sonn.png',
      germanDescription: ' Diese Webseite ist für eine Kundin erstellt. Die Yoga und Therapie Kurse anbietet.',
      englishDescription: 'This website was created for a client. Who offers yoga and therapy courses.',
      github: 'https://github.com/Rusty-Alex/sonnenschein',
      liveTest: 'https://sonnenschein-yoga-therapie.de/',
      online: true
    }

  ]

}


