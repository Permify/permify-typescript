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
import type { V1alpha1Type } from './V1alpha1Type';
import {
    V1alpha1TypeFromJSON,
    V1alpha1TypeFromJSONTyped,
    V1alpha1TypeToJSON,
} from './V1alpha1Type';

/**
 * Map type with parameterized key and value types, e.g. `map<string, int>`.
 * @export
 * @interface MapType
 */
export interface MapType {
    /**
     * 
     * @type {V1alpha1Type}
     * @memberof MapType
     */
    keyType?: V1alpha1Type;
    /**
     * 
     * @type {V1alpha1Type}
     * @memberof MapType
     */
    valueType?: V1alpha1Type;
}

/**
 * Check if a given object implements the MapType interface.
 */
export function instanceOfMapType(value: object): value is MapType {
    return true;
}

export function MapTypeFromJSON(json: any): MapType {
    return MapTypeFromJSONTyped(json, false);
}

export function MapTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MapType {
    if (json == null) {
        return json;
    }
    return {
        
        'keyType': json['keyType'] == null ? undefined : V1alpha1TypeFromJSON(json['keyType']),
        'valueType': json['valueType'] == null ? undefined : V1alpha1TypeFromJSON(json['valueType']),
    };
}

export function MapTypeToJSON(value?: MapType | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'keyType': V1alpha1TypeToJSON(value['keyType']),
        'valueType': V1alpha1TypeToJSON(value['valueType']),
    };
}

