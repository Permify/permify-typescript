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
 * Entity represents an entity with a type and an identifier.
 * @export
 * @interface Entity
 */
export interface Entity {
    /**
     * 
     * @type {string}
     * @memberof Entity
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof Entity
     */
    id?: string;
}

/**
 * Check if a given object implements the Entity interface.
 */
export function instanceOfEntity(value: object): value is Entity {
    return true;
}

export function EntityFromJSON(json: any): Entity {
    return EntityFromJSONTyped(json, false);
}

export function EntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): Entity {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'] == null ? undefined : json['type'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function EntityToJSON(value?: Entity | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}

