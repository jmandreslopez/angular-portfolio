import { Component } from '@angular/core';

// App
import { ConfigService } from '@app/services';

@Component({
    selector: 'jma-normal-layout',
    templateUrl: './normal-layout.component.html',
    styleUrls: ['./normal-layout.component.scss']
})
export class NormalLayoutComponent {

    constructor(public configService: ConfigService) {
        //
    }

}
