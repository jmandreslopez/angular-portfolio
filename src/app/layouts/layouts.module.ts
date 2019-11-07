import { NgModule } from '@angular/core';

// Modules
import { SharedModule } from '@app/shared/shared.module';

// Declarations
import { BlankLayoutComponent } from './elements';
import { NormalLayoutComponent } from './elements';

@NgModule({
    imports: [
        SharedModule,
    ],
    declarations: [
        BlankLayoutComponent,
        NormalLayoutComponent,
    ],
    providers: []
})
export class LayoutsModule {
    //
}
