import { Component } from '@angular/core';
import { MainVariableService } from '../main-variable.service';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  constructor(public mainVariableService: MainVariableService) { }
 

}
