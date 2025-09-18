import { Component, Input } from '@angular/core';
import { Photo } from '../../shared/models/photo.model';

@Component({
  selector: 'app-items-card',
  imports: [],
  templateUrl: './items-card.html',
  styleUrl: './items-card.css'
})
export class ItemsCard {
  @Input() photo!: Photo;
}
