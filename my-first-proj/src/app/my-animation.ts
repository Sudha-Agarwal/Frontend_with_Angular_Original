import { trigger, transition, style, animate } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('1000ms', style({ opacity: 1 }))
  ])
]);

export const slideIn = trigger('slideIn', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)' }),
    animate('2000ms', style({ transform: 'translateX(0)' }))
  ])
]);

export const zoomIn = trigger('zoomIn', [
  transition(':enter', [
    style({ transform: 'scale(0)' }),
    animate('2000ms', style({ transform: 'scale(3)' }))
  ])
]);
