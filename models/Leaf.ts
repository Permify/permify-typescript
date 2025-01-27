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
import type { ComputedAttribute } from './ComputedAttribute';
import {
    ComputedAttributeFromJSON,
    ComputedAttributeFromJSONTyped,
    ComputedAttributeToJSON,
} from './ComputedAttribute';
import type { ComputedUserSet } from './ComputedUserSet';
import {
    ComputedUserSetFromJSON,
    ComputedUserSetFromJSONTyped,
    ComputedUserSetToJSON,
} from './ComputedUserSet';
import type { V1Call } from './V1Call';
import {
    V1CallFromJSON,
    V1CallFromJSONTyped,
    V1CallToJSON,
} from './V1Call';
import type { TupleToUserSet } from './TupleToUserSet';
import {
    TupleToUserSetFromJSON,
    TupleToUserSetFromJSONTyped,
    TupleToUserSetToJSON,
} from './TupleToUserSet';

/**
 * Leaf represents a leaf node in the permission tree.
 * @export
 * @interface Leaf
 */
export interface Leaf {
    /**
     * 
     * @type {ComputedUserSet}
     * @memberof Leaf
     */
    computedUserSet?: ComputedUserSet;
    /**
     * 
     * @type {TupleToUserSet}
     * @memberof Leaf
     */
    tupleToUserSet?: TupleToUserSet;
    /**
     * 
     * @type {ComputedAttribute}
     * @memberof Leaf
     */
    computedAttribute?: ComputedAttribute;
    /**
     * 
     * @type {V1Call}
     * @memberof Leaf
     */
    call?: V1Call;
}

/**
 * Check if a given object implements the Leaf interface.
 */
export function instanceOfLeaf(value: object): value is Leaf {
    return true;
}

export function LeafFromJSON(json: any): Leaf {
    return LeafFromJSONTyped(json, false);
}

export function LeafFromJSONTyped(json: any, ignoreDiscriminator: boolean): Leaf {
    if (json == null) {
        return json;
    }
    return {
        
        'computedUserSet': json['computedUserSet'] == null ? undefined : ComputedUserSetFromJSON(json['computedUserSet']),
        'tupleToUserSet': json['tupleToUserSet'] == null ? undefined : TupleToUserSetFromJSON(json['tupleToUserSet']),
        'computedAttribute': json['computedAttribute'] == null ? undefined : ComputedAttributeFromJSON(json['computedAttribute']),
        'call': json['call'] == null ? undefined : V1CallFromJSON(json['call']),
    };
}

export function LeafToJSON(value?: Leaf | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'computedUserSet': ComputedUserSetToJSON(value['computedUserSet']),
        'tupleToUserSet': TupleToUserSetToJSON(value['tupleToUserSet']),
        'computedAttribute': ComputedAttributeToJSON(value['computedAttribute']),
        'call': V1CallToJSON(value['call']),
    };
}

