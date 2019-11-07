import { Component } from '@angular/core';

@Component({
    selector: 'jma-home-about',
    templateUrl: './home-about.component.html',
    styleUrls: ['./home-about.component.scss']
})
export class HomeAboutComponent {

    public onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
        console.log('HomeAboutComponent: ', visible);
    }

}
