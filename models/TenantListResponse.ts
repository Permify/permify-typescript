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
import type { Tenant } from './Tenant';
import {
    TenantFromJSON,
    TenantFromJSONTyped,
    TenantToJSON,
} from './Tenant';

/**
 * TenantListResponse is the message returned from the request to list all tenants.
 * @export
 * @interface TenantListResponse
 */
export interface TenantListResponse {
    /**
     * tenants is a list of tenants.
     * @type {Array<Tenant>}
     * @memberof TenantListResponse
     */
    tenants?: Array<Tenant>;
    /**
     * continuous_token is a string that can be used to paginate and retrieve the next set of results.
     * @type {string}
     * @memberof TenantListResponse
     */
    continuousToken?: string;
}

/**
 * Check if a given object implements the TenantListResponse interface.
 */
export function instanceOfTenantListResponse(value: object): value is TenantListResponse {
    return true;
}

export function TenantListResponseFromJSON(json: any): TenantListResponse {
    return TenantListResponseFromJSONTyped(json, false);
}

export function TenantListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TenantListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'tenants': json['tenants'] == null ? undefined : ((json['tenants'] as Array<any>).map(TenantFromJSON)),
        'continuousToken': json['continuous_token'] == null ? undefined : json['continuous_token'],
    };
}

export function TenantListResponseToJSON(value?: TenantListResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'tenants': value['tenants'] == null ? undefined : ((value['tenants'] as Array<any>).map(TenantToJSON)),
        'continuous_token': value['continuousToken'],
    };
}

