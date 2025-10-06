import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { ItemsList } from './items-list/items-list';
import { ItemDetails } from './item-details/item-details';

export const routes: Routes = [
    {path: '', component: Layout, children: [
        {path: '', component: ItemsList},
        {path: 'items-list/:id', component: ItemDetails}
    ]}
];
