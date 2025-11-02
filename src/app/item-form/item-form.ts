import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-item-form',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './item-form.html',
  styleUrl: './item-form.css'
})
export class ItemForm {
  dataService = inject(DataService)
  categories = ['Природа', 'Місто', 'Авто', 'Тварини']

  router = inject(Router)

  item_form = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl(''),
    imageUrl: new FormControl<string | ArrayBuffer | null>(null, Validators.required),
    price: new FormControl(0),
    category: new FormControl(this.categories[0], Validators.required)
  })


  onSubmit(){
    if(this.item_form.valid){
      this.dataService.addItem(this.item_form.getRawValue())
      this.router.navigate(["/"])
    }

  }

  onFileSelected (e:any) {
    const file = e.target.files[0]
    const reader = new FileReader()
    
    if(file) {
      reader.addEventListener('load', () =>{
        this.item_form.patchValue({imageUrl: reader.result})
      })
    }

    if (file) {
    reader.readAsDataURL(file);
  }
  }

}
