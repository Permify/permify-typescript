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
import type { Argument } from './Argument';
import {
    ArgumentFromJSON,
    ArgumentFromJSONTyped,
    ArgumentToJSON,
} from './Argument';

/**
 * Call represents a call to a rule. It includes the name of the rule and the arguments passed to it.
 * @export
 * @interface V1Call
 */
export interface V1Call {
    /**
     * 
     * @type {string}
     * @memberof V1Call
     */
    ruleName?: string;
    /**
     * 
     * @type {Array<Argument>}
     * @memberof V1Call
     */
    arguments?: Array<Argument>;
}

/**
 * Check if a given object implements the V1Call interface.
 */
export function instanceOfV1Call(value: object): value is V1Call {
    return true;
}

export function V1CallFromJSON(json: any): V1Call {
    return V1CallFromJSONTyped(json, false);
}

export function V1CallFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Call {
    if (json == null) {
        return json;
    }
    return {
        
        'ruleName': json['ruleName'] == null ? undefined : json['ruleName'],
        'arguments': json['arguments'] == null ? undefined : ((json['arguments'] as Array<any>).map(ArgumentFromJSON)),
    };
}

export function V1CallToJSON(value?: V1Call | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'ruleName': value['ruleName'],
        'arguments': value['arguments'] == null ? undefined : ((value['arguments'] as Array<any>).map(ArgumentToJSON)),
    };
}

