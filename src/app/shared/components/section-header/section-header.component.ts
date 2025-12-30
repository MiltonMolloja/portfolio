import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  template: `
    <div class="text-center mb-12">
      @if (badge) {
        <span class="inline-block px-4 py-1.5 bg-blue-500/10 text-blue-400 text-sm font-medium rounded-full border border-blue-500/20 mb-4">
          {{ badge }}
        </span>
      }
      <h1 [class]="titleClass">
        <span [class]="gradientClass">{{ title }}</span>
      </h1>
      @if (subtitle) {
        <p class="text-gray-400 max-w-2xl mx-auto" [class.text-lg]="largeSubtitle">
          {{ subtitle }}
        </p>
      }
    </div>
  `
})
export class SectionHeaderComponent {
  @Input({ required: true }) title!: string;
  @Input() subtitle?: string;
  @Input() badge?: string;
  @Input() largeSubtitle = false;
  @Input() size: 'sm' | 'md' | 'lg' = 'lg';

  get titleClass(): string {
    const sizes: Record<string, string> = {
      sm: 'text-3xl md:text-4xl font-bold mb-4',
      md: 'text-4xl md:text-5xl font-bold mb-4',
      lg: 'text-5xl md:text-6xl font-bold mb-4'
    };
    return sizes[this.size];
  }

  readonly gradientClass = 'bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent';
}
