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
 * ComputedUserSet defines a set of computed users which includes the relation name.
 * @export
 * @interface ComputedUserSet
 */
export interface ComputedUserSet {
    /**
     * 
     * @type {string}
     * @memberof ComputedUserSet
     */
    relation?: string;
}

/**
 * Check if a given object implements the ComputedUserSet interface.
 */
export function instanceOfComputedUserSet(value: object): value is ComputedUserSet {
    return true;
}

export function ComputedUserSetFromJSON(json: any): ComputedUserSet {
    return ComputedUserSetFromJSONTyped(json, false);
}

export function ComputedUserSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComputedUserSet {
    if (json == null) {
        return json;
    }
    return {
        
        'relation': json['relation'] == null ? undefined : json['relation'],
    };
}

export function ComputedUserSetToJSON(value?: ComputedUserSet | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'relation': value['relation'],
    };
}

