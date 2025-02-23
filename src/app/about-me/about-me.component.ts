import { Component, OnInit  } from '@angular/core';
import { MainVariableService } from '../main-variable.service';
import { CheckComponentActiveService } from '../check-component-active.service';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  
  constructor(public mainVariableService: MainVariableService, public checkComponentActiveService: CheckComponentActiveService) { }
  

}
