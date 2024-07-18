/* tslint:disable */
/* eslint-disable */
/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.9.9
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { DataChange } from './DataChange';
import {
    DataChangeFromJSON,
    DataChangeFromJSONTyped,
    DataChangeToJSON,
} from './DataChange';

/**
 * DataChanges represent changes in data with a snap token and a list of data change objects.
 * @export
 * @interface DataChanges
 */
export interface DataChanges {
    /**
     * The snapshot token.
     * @type {string}
     * @memberof DataChanges
     */
    snapToken?: string;
    /**
     * The list of data changes.
     * @type {Array<DataChange>}
     * @memberof DataChanges
     */
    dataChanges?: Array<DataChange>;
}

/**
 * Check if a given object implements the DataChanges interface.
 */
export function instanceOfDataChanges(value: object): value is DataChanges {
    return true;
}

export function DataChangesFromJSON(json: any): DataChanges {
    return DataChangesFromJSONTyped(json, false);
}

export function DataChangesFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataChanges {
    if (json == null) {
        return json;
    }
    return {
        
        'snapToken': json['snap_token'] == null ? undefined : json['snap_token'],
        'dataChanges': json['data_changes'] == null ? undefined : ((json['data_changes'] as Array<any>).map(DataChangeFromJSON)),
    };
}

export function DataChangesToJSON(value?: DataChanges | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'snap_token': value['snapToken'],
        'data_changes': value['dataChanges'] == null ? undefined : ((value['dataChanges'] as Array<any>).map(DataChangeToJSON)),
    };
}

