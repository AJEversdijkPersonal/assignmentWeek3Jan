import { Component, inject, signal, Signal } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  constructor(private router: Router) {}

  public navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
