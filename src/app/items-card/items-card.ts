import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Photo } from '../../shared/models/photo.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ShortenPipe } from '../pipes/shorten-pipe';
import { ChangeElementStyle } from "../directives/change-element-style";

@Component({
  selector: 'app-items-card',
  imports: [CommonModule, RouterLink, ShortenPipe, ChangeElementStyle],
  templateUrl: './items-card.html',
  styleUrl: './items-card.css'
})
export class ItemsCard {
  @Input() photo!: Photo;

  @Output() select = new EventEmitter<Photo>();

  // getPhotoDetails() {
  //   this.select.emit(this.photo);
  // }
}
