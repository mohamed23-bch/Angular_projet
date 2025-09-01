import { Routes } from '@angular/router';
import path from 'path';
import { AjouterComponent } from './ajouter/ajouter.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
    {path : '' , redirectTo : '/list', pathMatch : 'full' },
    { path : 'ajouter', component : AjouterComponent},
    { path : 'list', component : ListComponent}
];
