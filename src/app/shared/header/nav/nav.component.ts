import { Component } from '@angular/core';
import { MainVariableService } from '../../../main-variable.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule,MatDialog,MatDialogClose, MatDialogContent, } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';



@Component({
  selector: 'app-nav',
  imports: [MatButtonModule, MatDividerModule, MatIconModule,MatDialogModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  constructor(public mainVariableService: MainVariableService, private dialog: MatDialog)  {
    
  }

   openDialog() {
    this.dialog.open(DialogComponent, {    
      panelClass: 'custom-dialog-container' 
      
    });
  }
  

 
}
