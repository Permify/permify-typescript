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
 * Tenant represents a tenant with an id, a name, and a timestamp indicating when it was created.
 * @export
 * @interface Tenant
 */
export interface Tenant {
    /**
     * The ID of the tenant.
     * @type {string}
     * @memberof Tenant
     */
    id?: string;
    /**
     * The name of the tenant.
     * @type {string}
     * @memberof Tenant
     */
    name?: string;
    /**
     * The time at which the tenant was created.
     * @type {Date}
     * @memberof Tenant
     */
    createdAt?: Date;
}

/**
 * Check if a given object implements the Tenant interface.
 */
export function instanceOfTenant(value: object): value is Tenant {
    return true;
}

export function TenantFromJSON(json: any): Tenant {
    return TenantFromJSONTyped(json, false);
}

export function TenantFromJSONTyped(json: any, ignoreDiscriminator: boolean): Tenant {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'createdAt': json['created_at'] == null ? undefined : (new Date(json['created_at'])),
    };
}

export function TenantToJSON(value?: Tenant | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'created_at': value['createdAt'] == null ? undefined : ((value['createdAt']).toISOString()),
    };
}
