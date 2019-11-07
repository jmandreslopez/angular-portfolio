import { Component, OnInit, OnDestroy, AfterViewInit, HostListener } from '@angular/core';
import * as _ from 'lodash';
import scrollSpy from 'simple-scrollspy';
import { Subscription } from 'rxjs';

// App
import { ConfigService } from '@app/services';

@Component({
    selector: 'jma-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy, AfterViewInit {
    private subscriptions: Array<Subscription> = [];
    public scrolled: boolean = false;

    constructor(private configService: ConfigService) {
        this.bindObservables();
    }

    //****************************************************************************************
    // OBSERVABLES
    //****************************************************************************************

    protected bindObservables() {
        //
    }

    protected checkObservables() {
        //
    }

    protected destroyObservables() {
        _.forEach(this.subscriptions, (subscription: Subscription) => {
            if (!_.isUndefined(subscription)) {
                subscription.unsubscribe();
            }
        });
    }

    //****************************************************************************************
    // METHODS
    //****************************************************************************************

    @HostListener('window:scroll', ['$event'])
    public onWindowScroll(event: Event) {
        let offset = window.pageYOffset || document.documentElement.scrollTop;
        this.scrolled = (offset > this.configService.getLayoutHeaderOffset()) ? true : false;
    }

    private initScrollSpy() {
        scrollSpy('#menu', {
            offset: 50,
            sectionClass: '.scrollspy',
            menuActiveTarget: '.menu-item',
            activeClass: 'active',
        });
    }

    //****************************************************************************************
    // LIFECYCLES
    //****************************************************************************************

    public ngOnInit() {
        this.checkObservables();
    }

    public ngAfterViewInit() {
        this.initScrollSpy();
    }

    public ngOnDestroy() {
        this.destroyObservables();
    }

}
