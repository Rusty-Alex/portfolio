import { Component } from '@angular/core';
import { MainVariableService } from '../main-variable.service';
import { DialogProjectsComponent } from './dialog-projects/dialog-projects.component';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public hoverProjectJoin: boolean = false;
  public hoverProjectEPL: boolean = false;
  public hoverProjectSon: boolean = false;
  public hoverProjectDabubble: boolean = false;  
  constructor(public mainVariableService: MainVariableService, public dialog: MatDialog) { }

  openProjects(index: number) {
   
    this.dialog.open(DialogProjectsComponent, {
      data: { index },
      panelClass: 'custom-dialog-container' 
    });
  }

}
