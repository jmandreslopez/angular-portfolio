import { NgModule } from '@angular/core';

// Modules
import { SharedModule } from '@app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

// Components
import { HomeComponent } from './components';
import { HomeAboutComponent } from './components';
import { HomeBackgroundComponent } from './components';
import { HomeContactComponent } from './components';
import { HomeTestimonialsComponent } from './components';

@NgModule({
    imports: [
        SharedModule,
        HomeRoutingModule,
    ],
    declarations: [
        HomeComponent,
        HomeAboutComponent,
        HomeBackgroundComponent,
        HomeContactComponent,
        HomeTestimonialsComponent,
    ],
    providers: []
})
export class HomeModule {
    //
}
