import { Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';
import { PrivacyComponent } from './privacy/privacy.component';


export const routes: Routes = [
  { path: '', component: MaincomponentComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'main', component: MaincomponentComponent },
  
  


];