import { Component } from '@angular/core';
import { Photo } from '../../shared/models/photo.model';
import { ItemsCard } from '../items-card/items-card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-items-list',
  imports: [FormsModule, ItemsCard],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css'
})
export class ItemsList {
  photos: Photo[] = [
    {
      id: 1,
      title: 'Захід сонця в горах',
      category: 'Природа',
      description: 'Красивий захід сонця над гірським хребтом.',
      price: 29.99,
      imageUrl: 'photos/image_1.jpg',
      createdAt: new Date("2025-06-03")
    },
    {
      id: 2,
      title: 'Міський горизонт',
      category: 'Місто',
      description: 'Міський горизонт вночі з усіма його вогнями.',
      price: 39.99,
      imageUrl: 'photos/image_2.jpg',
      createdAt: new Date("2025-06-15")
    },
    {
      id: 3,
      title: 'Лісова стежка',
      category: 'Природа',
      description: 'Спокійна стежка через ліс.',
      imageUrl: 'photos/image_3.jpg',
      createdAt: new Date("2025-06-20") 
    }
  ]

  search: string = "";
  filteredPhotos = this.photos

  onItemSelected(photo: Photo) {
    console.log("Деталі: ", photo)
  }

  onSearch () {
    return this.filteredPhotos = this.photos.filter(photo => 
      photo.title.toLowerCase().includes(this.search.toLowerCase())
    )
  }

}
