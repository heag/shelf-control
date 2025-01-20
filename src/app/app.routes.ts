import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./global/laboratory/laboratory.routes').then((_) => _.LABORATORY_ROUTES),
     },
];
