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
import type { RelationshipWriteRequestMetadata } from './RelationshipWriteRequestMetadata';
import {
    RelationshipWriteRequestMetadataFromJSON,
    RelationshipWriteRequestMetadataFromJSONTyped,
    RelationshipWriteRequestMetadataToJSON,
} from './RelationshipWriteRequestMetadata';
import type { Tuple } from './Tuple';
import {
    TupleFromJSON,
    TupleFromJSONTyped,
    TupleToJSON,
} from './Tuple';

/**
 * Represents a request to write relationship data.
 * @export
 * @interface RelationshipsWriteRequest
 */
export interface RelationshipsWriteRequest {
    /**
     * 
     * @type {RelationshipWriteRequestMetadata}
     * @memberof RelationshipsWriteRequest
     */
    metadata?: RelationshipWriteRequestMetadata;
    /**
     * List of tuples for the request. Must have between 1 and 100 items.
     * @type {Array<Tuple>}
     * @memberof RelationshipsWriteRequest
     */
    tuples?: Array<Tuple>;
}

/**
 * Check if a given object implements the RelationshipsWriteRequest interface.
 */
export function instanceOfRelationshipsWriteRequest(value: object): value is RelationshipsWriteRequest {
    return true;
}

export function RelationshipsWriteRequestFromJSON(json: any): RelationshipsWriteRequest {
    return RelationshipsWriteRequestFromJSONTyped(json, false);
}

export function RelationshipsWriteRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RelationshipsWriteRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'metadata': json['metadata'] == null ? undefined : RelationshipWriteRequestMetadataFromJSON(json['metadata']),
        'tuples': json['tuples'] == null ? undefined : ((json['tuples'] as Array<any>).map(TupleFromJSON)),
    };
}

export function RelationshipsWriteRequestToJSON(value?: RelationshipsWriteRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'metadata': RelationshipWriteRequestMetadataToJSON(value['metadata']),
        'tuples': value['tuples'] == null ? undefined : ((value['tuples'] as Array<any>).map(TupleToJSON)),
    };
}

