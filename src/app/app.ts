import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChangeElementStyle } from './directives/change-element-style';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
  ],
  hostDirectives: [ChangeElementStyle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
