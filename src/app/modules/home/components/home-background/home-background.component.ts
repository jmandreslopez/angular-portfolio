import { Component } from '@angular/core';

@Component({
    selector: 'jma-home-background',
    templateUrl: './home-background.component.html',
    styleUrls: ['./home-background.component.scss']
})
export class HomeBackgroundComponent {

    public onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
        console.log('HomeBackgroundComponent: ', visible);
    }

}
