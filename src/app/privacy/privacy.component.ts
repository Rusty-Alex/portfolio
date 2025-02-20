import { Component } from '@angular/core';
import { MainVariableService } from '../main-variable.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-privacy',
  imports: [RouterModule],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {

  constructor(public mainVariableService: MainVariableService) { }
}
