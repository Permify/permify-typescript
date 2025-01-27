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
import type { Any } from './Any';
import {
    AnyFromJSON,
    AnyFromJSONTyped,
    AnyToJSON,
} from './Any';

/**
 * 
 * @export
 * @interface Status
 */
export interface Status {
    /**
     * 
     * @type {number}
     * @memberof Status
     */
    code?: number;
    /**
     * 
     * @type {string}
     * @memberof Status
     */
    message?: string;
    /**
     * 
     * @type {Array<Any>}
     * @memberof Status
     */
    details?: Array<Any>;
}

/**
 * Check if a given object implements the Status interface.
 */
export function instanceOfStatus(value: object): value is Status {
    return true;
}

export function StatusFromJSON(json: any): Status {
    return StatusFromJSONTyped(json, false);
}

export function StatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): Status {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'] == null ? undefined : json['code'],
        'message': json['message'] == null ? undefined : json['message'],
        'details': json['details'] == null ? undefined : ((json['details'] as Array<any>).map(AnyFromJSON)),
    };
}

export function StatusToJSON(value?: Status | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'message': value['message'],
        'details': value['details'] == null ? undefined : ((value['details'] as Array<any>).map(AnyToJSON)),
    };
}

