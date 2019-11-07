import { Directive, HostListener } from '@angular/core';
import * as _ from 'lodash';

@Directive({
    selector: '[konamiCode]',
})
export class KonamiCodeDirective {
    private sequence: Array<string> = [];

    // Up, Up, Down, Down, Left, Right, Left, Right, B, A
    private konamiCode: Array<string> = ['38', '38', '40', '40', '37', '39', '37', '39', '66', '65'];

    @HostListener('document:keydown', ['$event'])
    private handleKeyboardEvent(event: any) {
        if (event.keyCode) {
            this.sequence.push(event.keyCode.toString());
            if (this.sequence.length > this.konamiCode.length) {
                this.sequence.shift();
            }

            if (this.isKonamiCode()) {
                alert('Konami Code!');
            }
        }
    }

    private isKonamiCode(): boolean {
        return this.konamiCode.every((code: string, index: number) => code === this.sequence[index]);
    }

}
