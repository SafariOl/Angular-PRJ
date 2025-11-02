import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { ItemsList } from './items-list/items-list';
import { ItemDetails } from './item-details/item-details';
import { ItemForm } from './item-form/item-form';

export const routes: Routes = [
    {path: '', component: Layout, children: [
        {path: '', component: ItemsList},
        {path: 'items-list/:id', component: ItemDetails},
        {path: 'item-form', component: ItemForm},
    ]}
];
