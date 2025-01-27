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
import type { Status } from './Status';
import {
    StatusFromJSON,
    StatusFromJSONTyped,
    StatusToJSON,
} from './Status';
import type { PermissionLookupEntityStreamResponse } from './PermissionLookupEntityStreamResponse';
import {
    PermissionLookupEntityStreamResponseFromJSON,
    PermissionLookupEntityStreamResponseFromJSONTyped,
    PermissionLookupEntityStreamResponseToJSON,
} from './PermissionLookupEntityStreamResponse';

/**
 * 
 * @export
 * @interface StreamResultOfPermissionLookupEntityStreamResponse
 */
export interface StreamResultOfPermissionLookupEntityStreamResponse {
    /**
     * 
     * @type {PermissionLookupEntityStreamResponse}
     * @memberof StreamResultOfPermissionLookupEntityStreamResponse
     */
    result?: PermissionLookupEntityStreamResponse;
    /**
     * 
     * @type {Status}
     * @memberof StreamResultOfPermissionLookupEntityStreamResponse
     */
    error?: Status;
}

/**
 * Check if a given object implements the StreamResultOfPermissionLookupEntityStreamResponse interface.
 */
export function instanceOfStreamResultOfPermissionLookupEntityStreamResponse(value: object): value is StreamResultOfPermissionLookupEntityStreamResponse {
    return true;
}

export function StreamResultOfPermissionLookupEntityStreamResponseFromJSON(json: any): StreamResultOfPermissionLookupEntityStreamResponse {
    return StreamResultOfPermissionLookupEntityStreamResponseFromJSONTyped(json, false);
}

export function StreamResultOfPermissionLookupEntityStreamResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StreamResultOfPermissionLookupEntityStreamResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'result': json['result'] == null ? undefined : PermissionLookupEntityStreamResponseFromJSON(json['result']),
        'error': json['error'] == null ? undefined : StatusFromJSON(json['error']),
    };
}

export function StreamResultOfPermissionLookupEntityStreamResponseToJSON(value?: StreamResultOfPermissionLookupEntityStreamResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'result': PermissionLookupEntityStreamResponseToJSON(value['result']),
        'error': StatusToJSON(value['error']),
    };
}

