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
import type { Context } from './Context';
import {
    ContextFromJSON,
    ContextFromJSONTyped,
    ContextToJSON,
} from './Context';
import type { Entity } from './Entity';
import {
    EntityFromJSON,
    EntityFromJSONTyped,
    EntityToJSON,
} from './Entity';
import type { Argument } from './Argument';
import {
    ArgumentFromJSON,
    ArgumentFromJSONTyped,
    ArgumentToJSON,
} from './Argument';
import type { PermissionExpandRequestMetadata } from './PermissionExpandRequestMetadata';
import {
    PermissionExpandRequestMetadataFromJSON,
    PermissionExpandRequestMetadataFromJSONTyped,
    PermissionExpandRequestMetadataToJSON,
} from './PermissionExpandRequestMetadata';

/**
 * PermissionExpandRequest is the request message for the Expand method in the Permission service.
 * @export
 * @interface PermissionsExpandRequest
 */
export interface PermissionsExpandRequest {
    /**
     * 
     * @type {PermissionExpandRequestMetadata}
     * @memberof PermissionsExpandRequest
     */
    metadata?: PermissionExpandRequestMetadata;
    /**
     * 
     * @type {Entity}
     * @memberof PermissionsExpandRequest
     */
    entity?: Entity;
    /**
     * Name of the permission to be expanded, not required, must start with a letter and can include alphanumeric and underscore, max 64 bytes.
     * @type {string}
     * @memberof PermissionsExpandRequest
     */
    permission?: string;
    /**
     * 
     * @type {Context}
     * @memberof PermissionsExpandRequest
     */
    context?: Context;
    /**
     * Additional arguments associated with this request.
     * @type {Array<Argument>}
     * @memberof PermissionsExpandRequest
     */
    arguments?: Array<Argument>;
}

/**
 * Check if a given object implements the PermissionsExpandRequest interface.
 */
export function instanceOfPermissionsExpandRequest(value: object): value is PermissionsExpandRequest {
    return true;
}

export function PermissionsExpandRequestFromJSON(json: any): PermissionsExpandRequest {
    return PermissionsExpandRequestFromJSONTyped(json, false);
}

export function PermissionsExpandRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PermissionsExpandRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'metadata': json['metadata'] == null ? undefined : PermissionExpandRequestMetadataFromJSON(json['metadata']),
        'entity': json['entity'] == null ? undefined : EntityFromJSON(json['entity']),
        'permission': json['permission'] == null ? undefined : json['permission'],
        'context': json['context'] == null ? undefined : ContextFromJSON(json['context']),
        'arguments': json['arguments'] == null ? undefined : ((json['arguments'] as Array<any>).map(ArgumentFromJSON)),
    };
}

export function PermissionsExpandRequestToJSON(value?: PermissionsExpandRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'metadata': PermissionExpandRequestMetadataToJSON(value['metadata']),
        'entity': EntityToJSON(value['entity']),
        'permission': value['permission'],
        'context': ContextToJSON(value['context']),
        'arguments': value['arguments'] == null ? undefined : ((value['arguments'] as Array<any>).map(ArgumentToJSON)),
    };
}

