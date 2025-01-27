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
import type { Entity } from './Entity';
import {
    EntityFromJSON,
    EntityFromJSONTyped,
    EntityToJSON,
} from './Entity';
import type { Any } from './Any';
import {
    AnyFromJSON,
    AnyFromJSONTyped,
    AnyToJSON,
} from './Any';

/**
 * Attribute represents an attribute of an entity with a specific type and value.
 * @export
 * @interface Attribute
 */
export interface Attribute {
    /**
     * 
     * @type {Entity}
     * @memberof Attribute
     */
    entity?: Entity;
    /**
     * 
     * @type {string}
     * @memberof Attribute
     */
    attribute?: string;
    /**
     * 
     * @type {Any}
     * @memberof Attribute
     */
    value?: Any;
}

/**
 * Check if a given object implements the Attribute interface.
 */
export function instanceOfAttribute(value: object): value is Attribute {
    return true;
}

export function AttributeFromJSON(json: any): Attribute {
    return AttributeFromJSONTyped(json, false);
}

export function AttributeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Attribute {
    if (json == null) {
        return json;
    }
    return {
        
        'entity': json['entity'] == null ? undefined : EntityFromJSON(json['entity']),
        'attribute': json['attribute'] == null ? undefined : json['attribute'],
        'value': json['value'] == null ? undefined : AnyFromJSON(json['value']),
    };
}

export function AttributeToJSON(value?: Attribute | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'entity': EntityToJSON(value['entity']),
        'attribute': value['attribute'],
        'value': AnyToJSON(value['value']),
    };
}

