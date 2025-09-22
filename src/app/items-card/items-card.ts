import { Component, Input } from '@angular/core';
import { Photo } from '../../shared/models/photo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-items-card',
  imports: [CommonModule],
  templateUrl: './items-card.html',
  styleUrl: './items-card.css'
})
export class ItemsCard {
  @Input() photo!: Photo;
}
