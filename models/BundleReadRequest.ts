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
/**
 * 
 * @export
 * @interface BundleReadRequest
 */
export interface BundleReadRequest {
    /**
     * 
     * @type {string}
     * @memberof BundleReadRequest
     */
    name?: string;
}

/**
 * Check if a given object implements the BundleReadRequest interface.
 */
export function instanceOfBundleReadRequest(value: object): value is BundleReadRequest {
    return true;
}

export function BundleReadRequestFromJSON(json: any): BundleReadRequest {
    return BundleReadRequestFromJSONTyped(json, false);
}

export function BundleReadRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleReadRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
    };
}

export function BundleReadRequestToJSON(value?: BundleReadRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
    };
}
