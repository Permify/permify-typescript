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
/**
 * TenantListRequest is the message used for the request to list all tenants.
 * @export
 * @interface TenantListRequest
 */
export interface TenantListRequest {
    /**
     * page_size is the number of tenants to be returned in the response.
     * The value should be between 1 and 100.
     * @type {number}
     * @memberof TenantListRequest
     */
    pageSize?: number;
    /**
     * continuous_token is an optional parameter used for pagination.
     * It should be the value received in the previous response.
     * @type {string}
     * @memberof TenantListRequest
     */
    continuousToken?: string;
}

/**
 * Check if a given object implements the TenantListRequest interface.
 */
export function instanceOfTenantListRequest(value: object): value is TenantListRequest {
    return true;
}

export function TenantListRequestFromJSON(json: any): TenantListRequest {
    return TenantListRequestFromJSONTyped(json, false);
}

export function TenantListRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TenantListRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'pageSize': json['page_size'] == null ? undefined : json['page_size'],
        'continuousToken': json['continuous_token'] == null ? undefined : json['continuous_token'],
    };
}

export function TenantListRequestToJSON(value?: TenantListRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'page_size': value['pageSize'],
        'continuous_token': value['continuousToken'],
    };
}

