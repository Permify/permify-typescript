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
 * SchemaWriteRequest is the request message for the Write method in the Schema service.
 * It contains tenant_id and the schema to be written.
 * @export
 * @interface SchemasWriteRequest
 */
export interface SchemasWriteRequest {
    /**
     * schema is the string representation of the schema to be written.
     * @type {string}
     * @memberof SchemasWriteRequest
     */
    schema?: string;
}

/**
 * Check if a given object implements the SchemasWriteRequest interface.
 */
export function instanceOfSchemasWriteRequest(value: object): value is SchemasWriteRequest {
    return true;
}

export function SchemasWriteRequestFromJSON(json: any): SchemasWriteRequest {
    return SchemasWriteRequestFromJSONTyped(json, false);
}

export function SchemasWriteRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SchemasWriteRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : json['schema'],
    };
}

export function SchemasWriteRequestToJSON(value?: SchemasWriteRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': value['schema'],
    };
}

