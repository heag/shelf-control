import { Route } from '@angular/router';
import { ButtonLaboratoryComponent } from './button/button-laboratory.component';
import { CheckboxLaboratoryComponent } from './checkbox/checkbox-laboratory.component';
import { ChipLaboratoryComponent } from './chip/chip-laboratory.component';
import { InputLaboratoryComponent } from './input/input-laboratory.component';
import { LaboratoryComponent } from './laboratory.component';
import { PieChartLaboratoryComponent } from './pie-chart/pie-chart-laboratory.component';
import { RadioButtonGroupLaboratoryComponent } from './radio-button-group/radio-button-group-laboratory.component';
import { WelcomeLaboratoryComponent } from './welcome/welcome.component';

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
      {
        path: 'input',
        title: 'Input',
        component: InputLaboratoryComponent,
      },
      {
        path: 'pie-chart',
        title: 'Pie Chart',
        component: PieChartLaboratoryComponent,
      },
      {
        path: 'radio-group',
        title: 'Radio Group',
        component: RadioButtonGroupLaboratoryComponent,
      },
    ],
  },
];
