import { Component } from '@angular/core';
import { MainVariableService } from '../../../../main-variable.service';
import { MatDialogModule, MatDialogRef, } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  imports: [MatDialogModule, ],
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss', '../nav.component.scss']
  
})
export class DialogComponent {

  constructor(public mainVariableService: MainVariableService ,public dialogRef: MatDialogRef<DialogComponent>,) { }
  closeDialogAndScroll(section: string) {    
    this.mainVariableService.scrollToAndCloseDialog(section, this.dialogRef);
  }

}
