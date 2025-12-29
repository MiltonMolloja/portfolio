import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="tech-tag">
      {{ name }}
    </span>
  `
})
export class TechBadgeComponent {
  @Input({ required: true }) name!: string;
}
