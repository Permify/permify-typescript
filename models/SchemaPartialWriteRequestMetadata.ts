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
 * SchemaPartialWriteRequestMetadata provides additional information for the Schema Partial Write request.
 * It contains schema_version to specify which version of the schema should be read.
 * @export
 * @interface SchemaPartialWriteRequestMetadata
 */
export interface SchemaPartialWriteRequestMetadata {
    /**
     * schema_version is the string that identifies the version of the schema to be read.
     * @type {string}
     * @memberof SchemaPartialWriteRequestMetadata
     */
    schemaVersion?: string;
}

/**
 * Check if a given object implements the SchemaPartialWriteRequestMetadata interface.
 */
export function instanceOfSchemaPartialWriteRequestMetadata(value: object): value is SchemaPartialWriteRequestMetadata {
    return true;
}

export function SchemaPartialWriteRequestMetadataFromJSON(json: any): SchemaPartialWriteRequestMetadata {
    return SchemaPartialWriteRequestMetadataFromJSONTyped(json, false);
}

export function SchemaPartialWriteRequestMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SchemaPartialWriteRequestMetadata {
    if (json == null) {
        return json;
    }
    return {
        
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
    };
}

export function SchemaPartialWriteRequestMetadataToJSON(value?: SchemaPartialWriteRequestMetadata | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema_version': value['schemaVersion'],
    };
}

