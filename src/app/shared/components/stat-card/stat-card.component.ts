import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Stat } from '../../../core/models/portfolio.models';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card p-6 text-center group hover:border-primary-500 dark:hover:border-primary-400">
      <div class="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
        {{ stat.value }}
      </div>
      <div class="text-sm text-gray-600 dark:text-gray-400">
        {{ stat.label }}
      </div>
    </div>
  `
})
export class StatCardComponent {
  @Input({ required: true }) stat!: Stat;
}
