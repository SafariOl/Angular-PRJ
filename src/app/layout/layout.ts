import { Component } from '@angular/core';
import { ItemsList } from '../items-list/items-list';

@Component({
  selector: 'app-layout',
  imports: [],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {
  appTitle = "Фотографія"
}
