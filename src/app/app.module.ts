import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Vendors
import { Angulartics2Module } from 'angulartics2';

// Modules
import { SharedModule } from '@app/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,

        // Vendors
        Angulartics2Module.forRoot(),

        // App
        SharedModule,
        AppRoutingModule,
    ],
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    //
}
