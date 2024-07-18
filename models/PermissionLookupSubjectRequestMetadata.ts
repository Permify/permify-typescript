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
 * PermissionLookupSubjectRequestMetadata metadata for the PermissionLookupSubjectRequest.
 * @export
 * @interface PermissionLookupSubjectRequestMetadata
 */
export interface PermissionLookupSubjectRequestMetadata {
    /**
     * Version of the schema.
     * @type {string}
     * @memberof PermissionLookupSubjectRequestMetadata
     */
    schemaVersion?: string;
    /**
     * The snap token to avoid stale cache, see more details on [Snap Tokens](../../operations/snap-tokens).
     * @type {string}
     * @memberof PermissionLookupSubjectRequestMetadata
     */
    snapToken?: string;
    /**
     * Query limit when if recursive database queries got in loop.
     * @type {number}
     * @memberof PermissionLookupSubjectRequestMetadata
     */
    depth?: number;
}

/**
 * Check if a given object implements the PermissionLookupSubjectRequestMetadata interface.
 */
export function instanceOfPermissionLookupSubjectRequestMetadata(value: object): value is PermissionLookupSubjectRequestMetadata {
    return true;
}

export function PermissionLookupSubjectRequestMetadataFromJSON(json: any): PermissionLookupSubjectRequestMetadata {
    return PermissionLookupSubjectRequestMetadataFromJSONTyped(json, false);
}

export function PermissionLookupSubjectRequestMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): PermissionLookupSubjectRequestMetadata {
    if (json == null) {
        return json;
    }
    return {
        
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'snapToken': json['snap_token'] == null ? undefined : json['snap_token'],
        'depth': json['depth'] == null ? undefined : json['depth'],
    };
}

export function PermissionLookupSubjectRequestMetadataToJSON(value?: PermissionLookupSubjectRequestMetadata | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema_version': value['schemaVersion'],
        'snap_token': value['snapToken'],
        'depth': value['depth'],
    };
}
