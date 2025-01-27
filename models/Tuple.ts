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
import type { Entity } from './Entity';
import {
    EntityFromJSON,
    EntityFromJSONTyped,
    EntityToJSON,
} from './Entity';
import type { Subject } from './Subject';
import {
    SubjectFromJSON,
    SubjectFromJSONTyped,
    SubjectToJSON,
} from './Subject';

/**
 * Tuple is a structure that includes an entity, a relation, and a subject.
 * @export
 * @interface Tuple
 */
export interface Tuple {
    /**
     * 
     * @type {Entity}
     * @memberof Tuple
     */
    entity?: Entity;
    /**
     * 
     * @type {string}
     * @memberof Tuple
     */
    relation?: string;
    /**
     * 
     * @type {Subject}
     * @memberof Tuple
     */
    subject?: Subject;
}

/**
 * Check if a given object implements the Tuple interface.
 */
export function instanceOfTuple(value: object): value is Tuple {
    return true;
}

export function TupleFromJSON(json: any): Tuple {
    return TupleFromJSONTyped(json, false);
}

export function TupleFromJSONTyped(json: any, ignoreDiscriminator: boolean): Tuple {
    if (json == null) {
        return json;
    }
    return {
        
        'entity': json['entity'] == null ? undefined : EntityFromJSON(json['entity']),
        'relation': json['relation'] == null ? undefined : json['relation'],
        'subject': json['subject'] == null ? undefined : SubjectFromJSON(json['subject']),
    };
}

export function TupleToJSON(value?: Tuple | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'entity': EntityToJSON(value['entity']),
        'relation': value['relation'],
        'subject': SubjectToJSON(value['subject']),
    };
}

