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
import type { Values } from './Values';
import {
    ValuesFromJSON,
    ValuesFromJSONTyped,
    ValuesToJSON,
} from './Values';
import type { Any } from './Any';
import {
    AnyFromJSON,
    AnyFromJSONTyped,
    AnyToJSON,
} from './Any';
import type { Subjects } from './Subjects';
import {
    SubjectsFromJSON,
    SubjectsFromJSONTyped,
    SubjectsToJSON,
} from './Subjects';

/**
 * ExpandLeaf is the leaf node of an Expand tree and can be either a set of Subjects or a set of Values.
 * @export
 * @interface ExpandLeaf
 */
export interface ExpandLeaf {
    /**
     * 
     * @type {Subjects}
     * @memberof ExpandLeaf
     */
    subjects?: Subjects;
    /**
     * 
     * @type {Values}
     * @memberof ExpandLeaf
     */
    values?: Values;
    /**
     * 
     * @type {Any}
     * @memberof ExpandLeaf
     */
    value?: Any;
}

/**
 * Check if a given object implements the ExpandLeaf interface.
 */
export function instanceOfExpandLeaf(value: object): value is ExpandLeaf {
    return true;
}

export function ExpandLeafFromJSON(json: any): ExpandLeaf {
    return ExpandLeafFromJSONTyped(json, false);
}

export function ExpandLeafFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExpandLeaf {
    if (json == null) {
        return json;
    }
    return {
        
        'subjects': json['subjects'] == null ? undefined : SubjectsFromJSON(json['subjects']),
        'values': json['values'] == null ? undefined : ValuesFromJSON(json['values']),
        'value': json['value'] == null ? undefined : AnyFromJSON(json['value']),
    };
}

export function ExpandLeafToJSON(value?: ExpandLeaf | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'subjects': SubjectsToJSON(value['subjects']),
        'values': ValuesToJSON(value['values']),
        'value': AnyToJSON(value['value']),
    };
}

