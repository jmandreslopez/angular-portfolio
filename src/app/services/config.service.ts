import { Injectable } from '@angular/core';
import * as _ from 'lodash';

// Dependencies
declare const window: any;

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    protected config: any = window.config || {};

    // Description: Default collection key value
    protected default(key: any, backup: any, collection: any = this.config) {

        // Key Value
        if (!_.isNil(collection) && !_.isNil(key) && !_.isNil(collection[key])) {
            return collection[key];
        }

        // Default
        if (!_.isUndefined(backup)) {
            return backup;
        }

        // Throw Exception
        throw new Error(`Missing key - '${key}'`);
    }

}
