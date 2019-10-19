import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Vendors
import { NgxErrorsModule } from '@hackages/ngxerrors';
import { LaddaModule } from 'angular2-ladda';
import { Angulartics2Module } from 'angulartics2';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgPipesModule } from 'ngx-pipes';

// Components
import { SocialMenuComponent } from './components';

// Configs
import { LaddaConfig } from '@app/configs';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule,

        // Vendors
        NgxErrorsModule, // @hackages/ngxerrors
        LaddaModule.forRoot(LaddaConfig), // angular2-ladda
        Angulartics2Module.forRoot(), // angulartics2
        NgxPageScrollModule, // ngx-page-scroll
        NgxPageScrollCoreModule.forRoot(), // ngx-page-scroll-core
        NgPipesModule, // ngx-pipes
    ],
    declarations: [
        SocialMenuComponent,
    ],
    exports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule,

        // Modules
        NgxErrorsModule, // @hackages/ngxerrors
        LaddaModule, // angular2-ladda
        Angulartics2Module, // angulartics2
        NgxPageScrollModule, // ngx-page-scroll
        NgPipesModule, // ngx-pipes

        // Components
        SocialMenuComponent,
    ],
    providers: []
})
export class SharedModule {
    //
}
