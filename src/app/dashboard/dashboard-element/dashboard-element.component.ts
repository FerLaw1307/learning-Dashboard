import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-element',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-element.component.html',
  styleUrl: './dashboard-element.component.css',
  // host:{
  //   class: 'dashboard-elemento',
  // }
})
export class DashboardElementComponent {
  // @Input({ required: true }) image!: {
  //   src: string;
  //   alt: string;
  // };
  // @Input({ required: true }) title!: string;
  image = input.required<{ src: string; alt: string }>();
  title = input.required<string>();
}
