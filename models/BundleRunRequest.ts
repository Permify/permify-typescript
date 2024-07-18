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
 * BundleRunRequest is used to request the execution of a bundle.
 * It includes tenant_id, the name of the bundle, and additional arguments for execution.
 * @export
 * @interface BundleRunRequest
 */
export interface BundleRunRequest {
    /**
     * Name of the bundle to be executed.
     * @type {string}
     * @memberof BundleRunRequest
     */
    name?: string;
    /**
     * Additional key-value pairs for execution arguments.
     * @type {{ [key: string]: string; }}
     * @memberof BundleRunRequest
     */
    arguments?: { [key: string]: string; };
}

/**
 * Check if a given object implements the BundleRunRequest interface.
 */
export function instanceOfBundleRunRequest(value: object): value is BundleRunRequest {
    return true;
}

export function BundleRunRequestFromJSON(json: any): BundleRunRequest {
    return BundleRunRequestFromJSONTyped(json, false);
}

export function BundleRunRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleRunRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'arguments': json['arguments'] == null ? undefined : json['arguments'],
    };
}

export function BundleRunRequestToJSON(value?: BundleRunRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'arguments': value['arguments'],
    };
}

