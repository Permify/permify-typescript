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
import type { Tuple } from './Tuple';
import {
    TupleFromJSON,
    TupleFromJSONTyped,
    TupleToJSON,
} from './Tuple';

/**
 * RelationshipReadResponse defines the structure of the response after reading relationships.
 * It includes the tuples representing the relationships and a continuous token for handling result pagination.
 * @export
 * @interface RelationshipReadResponse
 */
export interface RelationshipReadResponse {
    /**
     * tuples is a list of the relationships retrieved in the read operation, represented as entity-relation-entity triples.
     * @type {Array<Tuple>}
     * @memberof RelationshipReadResponse
     */
    tuples?: Array<Tuple>;
    /**
     * continuous_token is used in the case of paginated reads to retrieve the next page of results.
     * @type {string}
     * @memberof RelationshipReadResponse
     */
    continuousToken?: string;
}

/**
 * Check if a given object implements the RelationshipReadResponse interface.
 */
export function instanceOfRelationshipReadResponse(value: object): value is RelationshipReadResponse {
    return true;
}

export function RelationshipReadResponseFromJSON(json: any): RelationshipReadResponse {
    return RelationshipReadResponseFromJSONTyped(json, false);
}

export function RelationshipReadResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RelationshipReadResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'tuples': json['tuples'] == null ? undefined : ((json['tuples'] as Array<any>).map(TupleFromJSON)),
        'continuousToken': json['continuous_token'] == null ? undefined : json['continuous_token'],
    };
}

export function RelationshipReadResponseToJSON(value?: RelationshipReadResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'tuples': value['tuples'] == null ? undefined : ((value['tuples'] as Array<any>).map(TupleToJSON)),
        'continuous_token': value['continuousToken'],
    };
}

