import { Component, HostListener } from '@angular/core';

// App
import { ConfigService } from '@app/services';

@Component({
    selector: 'jma-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    public scrolled: boolean = false;

    constructor(private configService: ConfigService) {
        //
    }

    @HostListener('window:scroll', ['$event'])
    public onWindowScroll(event: Event) {
        let offset = window.pageYOffset || document.documentElement.scrollTop;
        this.scrolled = (offset > this.configService.getLayoutHeaderOffset()) ? true : false;
    }

}
