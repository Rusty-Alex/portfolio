import { Component } from '@angular/core';
import { MainVariableService } from '../main-variable.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-imprint',
  imports: [RouterModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

  constructor(public mainVariableService: MainVariableService) { }
}
