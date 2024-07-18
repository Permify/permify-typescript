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
 * PermissionLookupEntityRequestMetadata metadata for the PermissionLookupEntityRequest.
 * @export
 * @interface PermissionLookupEntityRequestMetadata
 */
export interface PermissionLookupEntityRequestMetadata {
    /**
     * Version of the schema.
     * @type {string}
     * @memberof PermissionLookupEntityRequestMetadata
     */
    schemaVersion?: string;
    /**
     * The snap token to avoid stale cache, see more details on [Snap Tokens](../../operations/snap-tokens).
     * @type {string}
     * @memberof PermissionLookupEntityRequestMetadata
     */
    snapToken?: string;
    /**
     * Query limit when if recursive database queries got in loop.
     * @type {number}
     * @memberof PermissionLookupEntityRequestMetadata
     */
    depth?: number;
}

/**
 * Check if a given object implements the PermissionLookupEntityRequestMetadata interface.
 */
export function instanceOfPermissionLookupEntityRequestMetadata(value: object): value is PermissionLookupEntityRequestMetadata {
    return true;
}

export function PermissionLookupEntityRequestMetadataFromJSON(json: any): PermissionLookupEntityRequestMetadata {
    return PermissionLookupEntityRequestMetadataFromJSONTyped(json, false);
}

export function PermissionLookupEntityRequestMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): PermissionLookupEntityRequestMetadata {
    if (json == null) {
        return json;
    }
    return {
        
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'snapToken': json['snap_token'] == null ? undefined : json['snap_token'],
        'depth': json['depth'] == null ? undefined : json['depth'],
    };
}

export function PermissionLookupEntityRequestMetadataToJSON(value?: PermissionLookupEntityRequestMetadata | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema_version': value['schemaVersion'],
        'snap_token': value['snapToken'],
        'depth': value['depth'],
    };
}
