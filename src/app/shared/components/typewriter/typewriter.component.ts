import { Component, Input, OnInit, OnDestroy, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-typewriter',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  template: `
    <span class="typewriter-text">{{ displayText() }}</span><span class="cursor"></span>
  `,
  styles: [`
    :host {
      display: inline-flex;
      align-items: center;
    }
    
    .typewriter-text {
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      color: #3b82f6;
    }
    
    .cursor {
      display: inline-block;
      width: 4px;
      height: 1.1em;
      background-color: #3b82f6;
      margin-left: 2px;
      animation: blink 0.8s step-end infinite;
      vertical-align: middle;
    }
    
    @keyframes blink {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0; }
    }
  `]
})
export class TypewriterComponent implements OnInit, OnDestroy {
  @Input() texts: string[] = [];
  @Input() typingSpeed = 100;
  @Input() deletingSpeed = 50;
  @Input() pauseDuration = 2000;

  displayText = signal('');
  
  private currentTextIndex = 0;
  private currentCharIndex = 0;
  private isDeleting = false;
  private timeoutId: ReturnType<typeof setTimeout> | null = null;

  ngOnInit(): void {
    if (this.texts.length > 0) {
      this.type();
    }
  }

  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private type(): void {
    const currentText = this.texts[this.currentTextIndex];
    
    if (this.isDeleting) {
      // Deleting
      this.displayText.set(currentText.substring(0, this.currentCharIndex - 1));
      this.currentCharIndex--;
      
      if (this.currentCharIndex === 0) {
        this.isDeleting = false;
        this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
        this.timeoutId = setTimeout(() => this.type(), 500);
      } else {
        this.timeoutId = setTimeout(() => this.type(), this.deletingSpeed);
      }
    } else {
      // Typing
      this.displayText.set(currentText.substring(0, this.currentCharIndex + 1));
      this.currentCharIndex++;
      
      if (this.currentCharIndex === currentText.length) {
        // Finished typing, pause then delete
        this.isDeleting = true;
        this.timeoutId = setTimeout(() => this.type(), this.pauseDuration);
      } else {
        this.timeoutId = setTimeout(() => this.type(), this.typingSpeed);
      }
    }
  }
}
