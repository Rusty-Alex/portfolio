import { Component } from '@angular/core';
import { MainVariableService } from '../main-variable.service';
import { RouterModule } from '@angular/router';
import { NavComponent } from '../shared/header/nav/nav.component';

@Component({
  selector: 'app-imprint',
  imports: [RouterModule,NavComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

  constructor(public mainVariableService: MainVariableService) { }

  
  
}
