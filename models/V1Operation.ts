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
 * Operation is a message representing a series of operations that can be performed.
 * It includes fields for writing and deleting relationships and attributes.
 * @export
 * @interface V1Operation
 */
export interface V1Operation {
    /**
     * 'relationships_write' is a repeated string field for storing relationship keys
     * that are to be written or created.
     * @type {Array<string>}
     * @memberof V1Operation
     */
    relationshipsWrite?: Array<string>;
    /**
     * 'relationships_delete' is a repeated string field for storing relationship keys
     * that are to be deleted or removed.
     * @type {Array<string>}
     * @memberof V1Operation
     */
    relationshipsDelete?: Array<string>;
    /**
     * 'attributes_write' is a repeated string field for storing attribute keys
     * that are to be written or created.
     * @type {Array<string>}
     * @memberof V1Operation
     */
    attributesWrite?: Array<string>;
    /**
     * 'attributes_delete' is a repeated string field for storing attribute keys
     * that are to be deleted or removed.
     * @type {Array<string>}
     * @memberof V1Operation
     */
    attributesDelete?: Array<string>;
}

/**
 * Check if a given object implements the V1Operation interface.
 */
export function instanceOfV1Operation(value: object): value is V1Operation {
    return true;
}

export function V1OperationFromJSON(json: any): V1Operation {
    return V1OperationFromJSONTyped(json, false);
}

export function V1OperationFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Operation {
    if (json == null) {
        return json;
    }
    return {
        
        'relationshipsWrite': json['relationships_write'] == null ? undefined : json['relationships_write'],
        'relationshipsDelete': json['relationships_delete'] == null ? undefined : json['relationships_delete'],
        'attributesWrite': json['attributes_write'] == null ? undefined : json['attributes_write'],
        'attributesDelete': json['attributes_delete'] == null ? undefined : json['attributes_delete'],
    };
}

export function V1OperationToJSON(value?: V1Operation | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'relationships_write': value['relationshipsWrite'],
        'relationships_delete': value['relationshipsDelete'],
        'attributes_write': value['attributesWrite'],
        'attributes_delete': value['attributesDelete'],
    };
}

