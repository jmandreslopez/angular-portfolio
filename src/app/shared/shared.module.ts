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

// Configs
const LADDA_CONFIG: any = { style: 'slide-down', spinnerLines: 100 };

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule,

        // Vendors
        NgxErrorsModule, // @hackages/ngxerrors
        LaddaModule.forRoot(LADDA_CONFIG), // angular2-ladda
        Angulartics2Module.forRoot(), // angulartics2
        NgxPageScrollModule, // ngx-page-scroll
        NgxPageScrollCoreModule.forRoot(), // ngx-page-scroll-core
        NgPipesModule, // ngx-pipes
    ],
    declarations: [
        //
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
    ],
    providers: []
})
export class SharedModule {
    //
}
