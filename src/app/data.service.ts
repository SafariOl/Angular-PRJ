import { inject, Injectable } from '@angular/core';
import { Photo } from '../shared/models/photo.model';
import { BehaviorSubject, catchError, Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',

})
export class DataService {
  private http = inject(HttpClient)

  private photosSubject = new BehaviorSubject<Photo[]>([])
  photos$ = this.photosSubject.asObservable()

  constructor() {
    this.loadItems()
  }

  loadItems () {
    this.http.get<Photo[]>('/posts').subscribe({
      next: (data) => this.photosSubject.next(data),
      error: (err) => console.error(`Error: ${err}`)
    })
  }

  getItems():Observable<Photo[]> {
    return this.http.get<Photo[]>('').pipe(
      catchError((err:HttpErrorResponse) => {
        console.error(err)
        return throwError(() => new Error('Something went wrong'))
      })
    )
  }

  getItem(id: string):Observable<Photo> {
    return this.http.get<Photo>(`/posts/${id}`).pipe(
      catchError((err:HttpErrorResponse) => {
        console.error(err)
        return throwError(() => new Error('Something went wrong'))
      }))
  }

  async addItem(item: any) {
    const full_item = {
       id: uuidv4(),
       createdAt: new Date(),
       ...item,
    } as Photo

    return this.http.post<Photo>('/posts', full_item)
  }

  filterItems(search: string): void {
    const photos = this.photosSubject.value
    const filtered = photos.filter(photo =>
      photo.title.toLowerCase().includes(search.toLowerCase())
    );
    this.photosSubject.next(filtered);
  }

  resetItems() {
    this.loadItems()
  }
}
