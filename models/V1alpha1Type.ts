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
import type { WellKnownType } from './WellKnownType';
import {
    WellKnownTypeFromJSON,
    WellKnownTypeFromJSONTyped,
    WellKnownTypeToJSON,
} from './WellKnownType';
import type { FunctionType } from './FunctionType';
import {
    FunctionTypeFromJSON,
    FunctionTypeFromJSONTyped,
    FunctionTypeToJSON,
} from './FunctionType';
import type { ListType } from './ListType';
import {
    ListTypeFromJSON,
    ListTypeFromJSONTyped,
    ListTypeToJSON,
} from './ListType';
import type { AbstractType } from './AbstractType';
import {
    AbstractTypeFromJSON,
    AbstractTypeFromJSONTyped,
    AbstractTypeToJSON,
} from './AbstractType';
import type { PrimitiveType } from './PrimitiveType';
import {
    PrimitiveTypeFromJSON,
    PrimitiveTypeFromJSONTyped,
    PrimitiveTypeToJSON,
} from './PrimitiveType';
import type { MapType } from './MapType';
import {
    MapTypeFromJSON,
    MapTypeFromJSONTyped,
    MapTypeToJSON,
} from './MapType';

/**
 * Represents a CEL type.
 * @export
 * @interface V1alpha1Type
 */
export interface V1alpha1Type {
    /**
     * Dynamic type.
     * @type {object}
     * @memberof V1alpha1Type
     */
    dyn?: object;
    /**
     * Null value.
     * @type {string}
     * @memberof V1alpha1Type
     */
    _null?: string;
    /**
     * 
     * @type {PrimitiveType}
     * @memberof V1alpha1Type
     */
    primitive?: PrimitiveType;
    /**
     * 
     * @type {PrimitiveType}
     * @memberof V1alpha1Type
     */
    wrapper?: PrimitiveType;
    /**
     * 
     * @type {WellKnownType}
     * @memberof V1alpha1Type
     */
    wellKnown?: WellKnownType;
    /**
     * 
     * @type {ListType}
     * @memberof V1alpha1Type
     */
    listType?: ListType;
    /**
     * 
     * @type {MapType}
     * @memberof V1alpha1Type
     */
    mapType?: MapType;
    /**
     * 
     * @type {FunctionType}
     * @memberof V1alpha1Type
     */
    _function?: FunctionType;
    /**
     * Protocol buffer message type.
     * 
     * The `message_type` string specifies the qualified message type name. For
     * example, `google.plus.Profile`.
     * @type {string}
     * @memberof V1alpha1Type
     */
    messageType?: string;
    /**
     * Type param type.
     * 
     * The `type_param` string specifies the type parameter name, e.g. `list<E>`
     * would be a `list_type` whose element type was a `type_param` type
     * named `E`.
     * @type {string}
     * @memberof V1alpha1Type
     */
    typeParam?: string;
    /**
     * 
     * @type {V1alpha1Type}
     * @memberof V1alpha1Type
     */
    type?: V1alpha1Type;
    /**
     * Error type.
     * 
     * During type-checking if an expression is an error, its type is propagated
     * as the `ERROR` type. This permits the type-checker to discover other
     * errors present in the expression.
     * @type {object}
     * @memberof V1alpha1Type
     */
    error?: object;
    /**
     * 
     * @type {AbstractType}
     * @memberof V1alpha1Type
     */
    abstractType?: AbstractType;
}

/**
 * Check if a given object implements the V1alpha1Type interface.
 */
export function instanceOfV1alpha1Type(value: object): value is V1alpha1Type {
    return true;
}

export function V1alpha1TypeFromJSON(json: any): V1alpha1Type {
    return V1alpha1TypeFromJSONTyped(json, false);
}

export function V1alpha1TypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1Type {
    if (json == null) {
        return json;
    }
    return {
        
        'dyn': json['dyn'] == null ? undefined : json['dyn'],
        '_null': json['null'] == null ? undefined : json['null'],
        'primitive': json['primitive'] == null ? undefined : PrimitiveTypeFromJSON(json['primitive']),
        'wrapper': json['wrapper'] == null ? undefined : PrimitiveTypeFromJSON(json['wrapper']),
        'wellKnown': json['wellKnown'] == null ? undefined : WellKnownTypeFromJSON(json['wellKnown']),
        'listType': json['listType'] == null ? undefined : ListTypeFromJSON(json['listType']),
        'mapType': json['mapType'] == null ? undefined : MapTypeFromJSON(json['mapType']),
        '_function': json['function'] == null ? undefined : FunctionTypeFromJSON(json['function']),
        'messageType': json['messageType'] == null ? undefined : json['messageType'],
        'typeParam': json['typeParam'] == null ? undefined : json['typeParam'],
        'type': json['type'] == null ? undefined : V1alpha1TypeFromJSON(json['type']),
        'error': json['error'] == null ? undefined : json['error'],
        'abstractType': json['abstractType'] == null ? undefined : AbstractTypeFromJSON(json['abstractType']),
    };
}

export function V1alpha1TypeToJSON(value?: V1alpha1Type | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'dyn': value['dyn'],
        'null': value['_null'],
        'primitive': PrimitiveTypeToJSON(value['primitive']),
        'wrapper': PrimitiveTypeToJSON(value['wrapper']),
        'wellKnown': WellKnownTypeToJSON(value['wellKnown']),
        'listType': ListTypeToJSON(value['listType']),
        'mapType': MapTypeToJSON(value['mapType']),
        'function': FunctionTypeToJSON(value['_function']),
        'messageType': value['messageType'],
        'typeParam': value['typeParam'],
        'type': V1alpha1TypeToJSON(value['type']),
        'error': value['error'],
        'abstractType': AbstractTypeToJSON(value['abstractType']),
    };
}

