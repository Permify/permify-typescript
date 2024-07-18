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
 * PermissionCheckRequestMetadata metadata for the PermissionCheckRequest.
 * @export
 * @interface PermissionCheckRequestMetadata
 */
export interface PermissionCheckRequestMetadata {
    /**
     * Version of the schema.
     * @type {string}
     * @memberof PermissionCheckRequestMetadata
     */
    schemaVersion?: string;
    /**
     * The snap token to avoid stale cache, see more details on [Snap Tokens](../../operations/snap-tokens)
     * @type {string}
     * @memberof PermissionCheckRequestMetadata
     */
    snapToken?: string;
    /**
     * Query limit when if recursive database queries got in loop
     * @type {number}
     * @memberof PermissionCheckRequestMetadata
     */
    depth?: number;
}

/**
 * Check if a given object implements the PermissionCheckRequestMetadata interface.
 */
export function instanceOfPermissionCheckRequestMetadata(value: object): value is PermissionCheckRequestMetadata {
    return true;
}

export function PermissionCheckRequestMetadataFromJSON(json: any): PermissionCheckRequestMetadata {
    return PermissionCheckRequestMetadataFromJSONTyped(json, false);
}

export function PermissionCheckRequestMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): PermissionCheckRequestMetadata {
    if (json == null) {
        return json;
    }
    return {
        
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'snapToken': json['snap_token'] == null ? undefined : json['snap_token'],
        'depth': json['depth'] == null ? undefined : json['depth'],
    };
}

export function PermissionCheckRequestMetadataToJSON(value?: PermissionCheckRequestMetadata | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema_version': value['schemaVersion'],
        'snap_token': value['snapToken'],
        'depth': value['depth'],
    };
}

