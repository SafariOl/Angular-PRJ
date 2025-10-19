import { Component, inject } from '@angular/core';
import { ItemsCard } from '../items-card/items-card';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { Photo } from '../../shared/models/photo.model';
import { Observable } from 'rxjs';
import { NgForOf } from '@angular/common';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-items-list',
  imports: [FormsModule, ItemsCard, NgForOf, AsyncPipe],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css'
})
export class ItemsList {
  search: string = "";
  private dataService = inject(DataService)
  
  photos$:Observable<Photo[]> = this.dataService.getItems()
  
  onItemSelected(photo: Photo) {
    console.log("Деталі: ", photo)
  }

  onSearch () {
    const searchTrim = this.search.trim()

    if(searchTrim){
      this.dataService.filterItems(searchTrim)
    }else{
      this.dataService.resetItems()
    }
  }

}
