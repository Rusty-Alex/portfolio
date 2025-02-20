import { Component } from '@angular/core';
import { MainVariableService } from '../main-variable.service';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  constructor(public mainVariableService: MainVariableService) { }

}
