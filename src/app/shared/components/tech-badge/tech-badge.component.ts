import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-badge',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
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
