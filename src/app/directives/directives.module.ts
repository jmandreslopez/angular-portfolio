import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Directives
import { KonamiCodeDirective } from './elements';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        KonamiCodeDirective,
    ],
    exports: [
        KonamiCodeDirective,
    ],
    providers: [],
})
export class DirectivesModule {
    //
}
