import { Route } from '@angular/router';
import { LaboratoryComponent } from './laboratory.component';
import { ButtonLaboratoryComponent } from './button/button-laboratory.component';
import { WelcomeLaboratoryComponent } from './welcome/welcome.component';
import { ChipLaboratoryComponent } from './chip/chip-laboratory.component';
import { CheckboxLaboratoryComponent } from './checkbox/checkbox-laboratory.component';

export const LABORATORY_ROUTES: Route[] = [
  {
    path: '',
    component: LaboratoryComponent,
    children: [
      {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full',
      },
      {
        path: 'welcome',
        title: 'Welcome',
        component: WelcomeLaboratoryComponent,
      },
      {
        path: 'button',
        title: 'Button',
        component: ButtonLaboratoryComponent,
      },
      {
        path: 'checkbox',
        title: 'Checkbox',
        component: CheckboxLaboratoryComponent,
      },
      {
        path: 'chip',
        title: 'Chip',
        component: ChipLaboratoryComponent,
      },
    ],
  },
];
