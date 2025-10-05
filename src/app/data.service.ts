import { Injectable } from '@angular/core';
import { Photo } from '../shared/models/photo.model';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  photos:Photo[] = [
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

  private photosSubject = new BehaviorSubject<Photo[]>(this.photos)
  photos$ = this.photosSubject.asObservable()

  getItems():Observable<Photo[]> {
    return this.photos$
  }

  filterItems(search: string) {
    const filtered = this.photos.filter(photo => 
      photo.title.toLowerCase().includes(search.toLowerCase())
    )
    this.photosSubject.next(filtered);
  }

  resetItems() {
    this.photosSubject.next(this.photos)
  }
}
