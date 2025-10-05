import { Component, inject } from '@angular/core';
import { ItemsCard } from '../items-card/items-card';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { Photo } from '../../shared/models/photo.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-items-list',
  imports: [FormsModule, ItemsCard],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css'
})
export class ItemsList {
  photos:Photo[] = []
  search: string = "";
  private subscription!: Subscription

  constructor(
    private dataService:DataService
  ){}

  ngOnInit() {
    this.subscription = this.dataService.getItems().subscribe(val => this.photos = val)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

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
