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
import type { Subject } from './Subject';
import {
    SubjectFromJSON,
    SubjectFromJSONTyped,
    SubjectToJSON,
} from './Subject';

/**
 * Subjects holds a repeated field of Subject type.
 * @export
 * @interface Subjects
 */
export interface Subjects {
    /**
     * A list of subjects.
     * @type {Array<Subject>}
     * @memberof Subjects
     */
    subjects?: Array<Subject>;
}

/**
 * Check if a given object implements the Subjects interface.
 */
export function instanceOfSubjects(value: object): value is Subjects {
    return true;
}

export function SubjectsFromJSON(json: any): Subjects {
    return SubjectsFromJSONTyped(json, false);
}

export function SubjectsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Subjects {
    if (json == null) {
        return json;
    }
    return {
        
        'subjects': json['subjects'] == null ? undefined : ((json['subjects'] as Array<any>).map(SubjectFromJSON)),
    };
}

export function SubjectsToJSON(value?: Subjects | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'subjects': value['subjects'] == null ? undefined : ((value['subjects'] as Array<any>).map(SubjectToJSON)),
    };
}

