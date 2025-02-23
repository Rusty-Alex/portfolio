import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { CheckComponentActiveService } from '../check-component-active.service';
import { isPlatformBrowser } from '@angular/common';  // Import für Plattformprüfung

@Directive({
  selector: '[appOnViewport]',
  standalone: true,
})
export class OnViewportDirective implements OnInit, OnDestroy {
  @Input('appOnViewport') componentId!: string;
  @Input() animationClass!: string; // Benutzerdefinierte Animation
  private observer!: IntersectionObserver;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private checkComponentActiveService: CheckComponentActiveService,
    @Inject(PLATFORM_ID) private platformId: object  
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {      
      this.observer = new IntersectionObserver(
        ([entry]) => {
          const isVisible = entry.isIntersecting;
          this.checkComponentActiveService.updateVisibility(this.componentId, isVisible);                    
        },
        { threshold: 0.1 }
      );

      this.observer.observe(this.el.nativeElement);
    } else {
      console.warn('IntersectionObserver ist im SSR-Modus nicht verfügbar');
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
