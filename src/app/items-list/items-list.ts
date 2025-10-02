import { Component } from '@angular/core';
import { ItemsCard } from '../items-card/items-card';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { Photo } from '../../shared/models/photo.model';

@Component({
  selector: 'app-items-list',
  imports: [FormsModule, ItemsCard],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css'
})
export class ItemsList {
  photos:Photo[] = []
  search: string = "";
  filteredPhotos:Photo[] = []

  constructor(
    private dataService:DataService
  ){}

  ngOnInit() {
    this.photos = this.dataService.getItems()
    this.filteredPhotos = this.photos
  }

  onItemSelected(photo: Photo) {
    console.log("Деталі: ", photo)
  }

  onSearch () {
    return this.filteredPhotos = this.photos.filter(photo => 
      photo.title.toLowerCase().includes(this.search.toLowerCase())
    )
  }

}
