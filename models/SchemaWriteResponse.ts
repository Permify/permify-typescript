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
 * SchemaWriteResponse is the response message for the Write method in the Schema service.
 * It returns the version of the written schema.
 * @export
 * @interface SchemaWriteResponse
 */
export interface SchemaWriteResponse {
    /**
     * schema_version is the string that identifies the version of the written schema.
     * @type {string}
     * @memberof SchemaWriteResponse
     */
    schemaVersion?: string;
}

/**
 * Check if a given object implements the SchemaWriteResponse interface.
 */
export function instanceOfSchemaWriteResponse(value: object): value is SchemaWriteResponse {
    return true;
}

export function SchemaWriteResponseFromJSON(json: any): SchemaWriteResponse {
    return SchemaWriteResponseFromJSONTyped(json, false);
}

export function SchemaWriteResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SchemaWriteResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
    };
}

export function SchemaWriteResponseToJSON(value?: SchemaWriteResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema_version': value['schemaVersion'],
    };
}

