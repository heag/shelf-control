import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LABORATORY_ROUTES } from './laboratory.routes';

@Component({
  selector: 'hec-laboratory',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './laboratory.component.html',
  styleUrl: './laboratory.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaboratoryComponent {
  areas: any[] = [];

  constructor() {
    this.createAreas();
 }

 private createAreas() {
    const routes = LABORATORY_ROUTES[0];

    if (routes && routes.children) {
      routes.children
      .forEach((route) => {
         if (route.path) {
            this.areas.push({
               title: route.title,
               path: route.path,
            });
         }
      });
    }    
 }

}
