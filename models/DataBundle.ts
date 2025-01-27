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
import type { V1Operation } from './V1Operation';
import {
    V1OperationFromJSON,
    V1OperationFromJSONTyped,
    V1OperationToJSON,
} from './V1Operation';

/**
 * DataBundle is a message representing a bundle of data, which includes a name,
 * a list of arguments, and a series of operations.
 * @export
 * @interface DataBundle
 */
export interface DataBundle {
    /**
     * 'name' is a simple string field representing the name of the DataBundle.
     * @type {string}
     * @memberof DataBundle
     */
    name?: string;
    /**
     * 'arguments' is a repeated field, which means it can contain multiple strings.
     * These are used to store a list of arguments related to the DataBundle.
     * @type {Array<string>}
     * @memberof DataBundle
     */
    arguments?: Array<string>;
    /**
     * 'operations' is a repeated field containing multiple Operation messages.
     * Each Operation represents a specific action or set of actions to be performed.
     * @type {Array<V1Operation>}
     * @memberof DataBundle
     */
    operations?: Array<V1Operation>;
}

/**
 * Check if a given object implements the DataBundle interface.
 */
export function instanceOfDataBundle(value: object): value is DataBundle {
    return true;
}

export function DataBundleFromJSON(json: any): DataBundle {
    return DataBundleFromJSONTyped(json, false);
}

export function DataBundleFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataBundle {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'arguments': json['arguments'] == null ? undefined : json['arguments'],
        'operations': json['operations'] == null ? undefined : ((json['operations'] as Array<any>).map(V1OperationFromJSON)),
    };
}

export function DataBundleToJSON(value?: DataBundle | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'arguments': value['arguments'],
        'operations': value['operations'] == null ? undefined : ((value['operations'] as Array<any>).map(V1OperationToJSON)),
    };
}

