import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  selector: 'app-contactdialog',
  imports: [CommonModule],
  templateUrl: './contactdialog.component.html',
  styleUrl: './contactdialog.component.scss'
})
export class ContactdialogComponent {

  sendMessageTrue: boolean;

  constructor(public dialog: MatDialog,public mainVariableService: MainVariableService, @Inject(MAT_DIALOG_DATA) public data: { sendMessageTrue: boolean }, ) {
    this.sendMessageTrue = this.data.sendMessageTrue;

  }

  closeDialog(){
    this.dialog.closeAll();
  }

}
