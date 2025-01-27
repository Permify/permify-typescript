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
import type { Expr } from './Expr';
import {
    ExprFromJSON,
    ExprFromJSONTyped,
    ExprToJSON,
} from './Expr';

/**
 * A list creation expression.
 * 
 * Lists may either be homogenous, e.g. `[1, 2, 3]`, or heterogeneous, e.g.
 * `dyn([1, 'hello', 2.0])`
 * @export
 * @interface CreateList
 */
export interface CreateList {
    /**
     * The elements part of the list.
     * @type {Array<Expr>}
     * @memberof CreateList
     */
    elements?: Array<Expr>;
    /**
     * The indices within the elements list which are marked as optional
     * elements.
     * 
     * When an optional-typed value is present, the value it contains
     * is included in the list. If the optional-typed value is absent, the list
     * element is omitted from the CreateList result.
     * @type {Array<number>}
     * @memberof CreateList
     */
    optionalIndices?: Array<number>;
}

/**
 * Check if a given object implements the CreateList interface.
 */
export function instanceOfCreateList(value: object): value is CreateList {
    return true;
}

export function CreateListFromJSON(json: any): CreateList {
    return CreateListFromJSONTyped(json, false);
}

export function CreateListFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateList {
    if (json == null) {
        return json;
    }
    return {
        
        'elements': json['elements'] == null ? undefined : ((json['elements'] as Array<any>).map(ExprFromJSON)),
        'optionalIndices': json['optionalIndices'] == null ? undefined : json['optionalIndices'],
    };
}

export function CreateListToJSON(value?: CreateList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'elements': value['elements'] == null ? undefined : ((value['elements'] as Array<any>).map(ExprToJSON)),
        'optionalIndices': value['optionalIndices'],
    };
}

