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
 * AttributeReadRequestMetadata defines the structure for the metadata of an attribute read request.
 * It includes the snap_token associated with a particular state of the database.
 * @export
 * @interface AttributeReadRequestMetadata
 */
export interface AttributeReadRequestMetadata {
    /**
     * The snap token to avoid stale cache, see more details on [Snap Tokens](../../operations/snap-tokens)
     * @type {string}
     * @memberof AttributeReadRequestMetadata
     */
    snapToken?: string;
}

/**
 * Check if a given object implements the AttributeReadRequestMetadata interface.
 */
export function instanceOfAttributeReadRequestMetadata(value: object): value is AttributeReadRequestMetadata {
    return true;
}

export function AttributeReadRequestMetadataFromJSON(json: any): AttributeReadRequestMetadata {
    return AttributeReadRequestMetadataFromJSONTyped(json, false);
}

export function AttributeReadRequestMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttributeReadRequestMetadata {
    if (json == null) {
        return json;
    }
    return {
        
        'snapToken': json['snap_token'] == null ? undefined : json['snap_token'],
    };
}

export function AttributeReadRequestMetadataToJSON(value?: AttributeReadRequestMetadata | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'snap_token': value['snapToken'],
    };
}
