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
 * @interface RelationshipDeleteResponse
 */
export interface RelationshipDeleteResponse {
    /**
     * The snap token to avoid stale cache, see more details on [Snap Tokens](../../operations/snap-tokens)
     * @type {string}
     * @memberof RelationshipDeleteResponse
     */
    snapToken?: string;
}

/**
 * Check if a given object implements the RelationshipDeleteResponse interface.
 */
export function instanceOfRelationshipDeleteResponse(value: object): value is RelationshipDeleteResponse {
    return true;
}

export function RelationshipDeleteResponseFromJSON(json: any): RelationshipDeleteResponse {
    return RelationshipDeleteResponseFromJSONTyped(json, false);
}

export function RelationshipDeleteResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RelationshipDeleteResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'snapToken': json['snap_token'] == null ? undefined : json['snap_token'],
    };
}

export function RelationshipDeleteResponseToJSON(value?: RelationshipDeleteResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'snap_token': value['snapToken'],
    };
}

