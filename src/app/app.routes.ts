import { Routes } from '@angular/router';

import { PageComponent } from './page/page.component';
import { languageGuard } from './page/language.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: "fr",
        pathMatch: "full"
    },
    {
        path: ':languageCode',
        component: PageComponent,
        canActivate: [languageGuard]
    },
];
