import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import * as _ from 'lodash';
import { Subscription } from 'rxjs';

// @ts-ignore
import app from '../app.json';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    private subscriptions: Array<Subscription> = [];

    constructor(private angulartics: Angulartics2GoogleAnalytics,
                private elementRef: ElementRef) {

        // Start Tracking
        this.angulartics.startTracking();

        this.bindObservables();
    }

    //****************************************************************************************
    // OBSERVABLES
    //****************************************************************************************

    private bindObservables() {
        //
    }

    private checkObservables() {
        //
    }

    private destroyObservables() {
        _.forEach(this.subscriptions, (subscription: Subscription) => {
            if (!_.isUndefined(subscription)) {
                subscription.unsubscribe();
            }
        });
    }

    //****************************************************************************************
    // METHODS
    //****************************************************************************************

    private processApp() {

        // Verifying the app file exists
        // and that contains a version number
        if (_.isUndefined(app) ||
            _.isUndefined(app.Version)) {

            return; // break
        }

        // Check for native element
        if (_.isUndefined(this.elementRef) ||
            _.isUndefined(this.elementRef.nativeElement)) {

            return; // break
        }

        // Set App Version as a custom attribute
        // Useful to check with is the running version
        this.elementRef.nativeElement.setAttribute('app-version', app.version);
    }

    //****************************************************************************************
    // LIFECYCLES
    //****************************************************************************************

    public ngOnInit() {
        this.checkObservables();

        // Process App file
        this.processApp();
    }

    public ngOnDestroy() {
        this.destroyObservables();
    }

}
