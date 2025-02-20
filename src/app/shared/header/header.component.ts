import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { MainVariableService } from '../../main-variable.service';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-header',
  imports: [NavComponent,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
 
 
})
export class HeaderComponent {

  constructor(public mainVariableService: MainVariableService) { }
  hovered = false;

 
  
}
