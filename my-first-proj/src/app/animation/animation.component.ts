import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { fadeIn, slideIn, zoomIn } from '../my-animation';
@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [fadeIn, slideIn, zoomIn]
})
export class AnimationComponent {

}
