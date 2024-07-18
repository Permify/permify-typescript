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
import type { SchemaDefinition } from './SchemaDefinition';
import {
    SchemaDefinitionFromJSON,
    SchemaDefinitionFromJSONTyped,
    SchemaDefinitionToJSON,
} from './SchemaDefinition';

/**
 * SchemaReadResponse is the response message for the Read method in the Schema service.
 * It returns the requested schema.
 * @export
 * @interface SchemaReadResponse
 */
export interface SchemaReadResponse {
    /**
     * 
     * @type {SchemaDefinition}
     * @memberof SchemaReadResponse
     */
    schema?: SchemaDefinition;
}

/**
 * Check if a given object implements the SchemaReadResponse interface.
 */
export function instanceOfSchemaReadResponse(value: object): value is SchemaReadResponse {
    return true;
}

export function SchemaReadResponseFromJSON(json: any): SchemaReadResponse {
    return SchemaReadResponseFromJSONTyped(json, false);
}

export function SchemaReadResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SchemaReadResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : SchemaDefinitionFromJSON(json['schema']),
    };
}

export function SchemaReadResponseToJSON(value?: SchemaReadResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': SchemaDefinitionToJSON(value['schema']),
    };
}

