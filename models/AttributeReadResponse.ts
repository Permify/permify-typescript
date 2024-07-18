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
import type { Attribute } from './Attribute';
import {
    AttributeFromJSON,
    AttributeFromJSONTyped,
    AttributeToJSON,
} from './Attribute';

/**
 * AttributeReadResponse defines the structure of the response to an attribute read request.
 * It includes the attributes retrieved and a continuous token for handling result pagination.
 * @export
 * @interface AttributeReadResponse
 */
export interface AttributeReadResponse {
    /**
     * attributes is a list of the attributes retrieved in the read operation.
     * @type {Array<Attribute>}
     * @memberof AttributeReadResponse
     */
    attributes?: Array<Attribute>;
    /**
     * continuous_token is used in the case of paginated reads to retrieve the next page of results.
     * @type {string}
     * @memberof AttributeReadResponse
     */
    continuousToken?: string;
}

/**
 * Check if a given object implements the AttributeReadResponse interface.
 */
export function instanceOfAttributeReadResponse(value: object): value is AttributeReadResponse {
    return true;
}

export function AttributeReadResponseFromJSON(json: any): AttributeReadResponse {
    return AttributeReadResponseFromJSONTyped(json, false);
}

export function AttributeReadResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttributeReadResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'attributes': json['attributes'] == null ? undefined : ((json['attributes'] as Array<any>).map(AttributeFromJSON)),
        'continuousToken': json['continuous_token'] == null ? undefined : json['continuous_token'],
    };
}

export function AttributeReadResponseToJSON(value?: AttributeReadResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'attributes': value['attributes'] == null ? undefined : ((value['attributes'] as Array<any>).map(AttributeToJSON)),
        'continuous_token': value['continuousToken'],
    };
}

