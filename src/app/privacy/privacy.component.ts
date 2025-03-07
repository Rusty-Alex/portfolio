import { Component } from '@angular/core';
import { MainVariableService } from '../main-variable.service';
import { RouterModule } from '@angular/router';
import { NavComponent } from '../shared/header/nav/nav.component';

@Component({
  selector: 'app-privacy',
  imports: [RouterModule, NavComponent],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {

  constructor(public mainVariableService: MainVariableService) { }
  
}
