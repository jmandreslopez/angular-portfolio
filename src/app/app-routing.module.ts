import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// App
import { BlankLayoutComponent } from '@app/layouts';
import { NormalLayoutComponent } from '@app/layouts';

const routes: Routes = [

    // Global Route
    // Use this elements to run high
    // level resolvers or guards
    {
        path: '',
        children: [

            // Normal Layout
            {
                path: '',
                component: NormalLayoutComponent,
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
                    },
                ],
            },

            // Blank Layout
            {
                path: '',
                component: BlankLayoutComponent,
                children: [
                    {
                        path: '404',
                        loadChildren: () => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule),
                        data: { breadcrumbs: 'Not Found' },
                    },
                ],
            },

        ],
    },

    // Redirects
    { path: '**', redirectTo: '/404' }, // Not Found

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    //
}
