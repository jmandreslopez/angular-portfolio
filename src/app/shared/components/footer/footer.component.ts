import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'jma-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    public year: string = moment().format('YYYY');
}
