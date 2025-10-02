import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { ItemsList } from './items-list/items-list';

export const routes: Routes = [
    {path: '', component: Layout, children: [
        {path: '', component: ItemsList}
    ]}
];
