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


import * as runtime from '../runtime';
import type {
  Status,
  StreamResultOfWatchResponse,
  WatchWatchRequest,
} from '../models/index';
import {
    StatusFromJSON,
    StatusToJSON,
    StreamResultOfWatchResponseFromJSON,
    StreamResultOfWatchResponseToJSON,
    WatchWatchRequestFromJSON,
    WatchWatchRequestToJSON,
} from '../models/index';

export interface WatchWatchOperationRequest {
    tenantId: string;
    body: WatchWatchRequest;
}

/**
 * 
 */
export class WatchApi extends runtime.BaseAPI {

    /**
     * watch changes
     */
    async watchWatchRaw(requestParameters: WatchWatchOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StreamResultOfWatchResponse>> {
        if (requestParameters['tenantId'] == null) {
            throw new runtime.RequiredError(
                'tenantId',
                'Required parameter "tenantId" was null or undefined when calling watchWatch().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling watchWatch().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/tenants/{tenant_id}/watch`.replace(`{${"tenant_id"}}`, encodeURIComponent(String(requestParameters['tenantId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: WatchWatchRequestToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StreamResultOfWatchResponseFromJSON(jsonValue));
    }

    /**
     * watch changes
     */
    async watchWatch(requestParameters: WatchWatchOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StreamResultOfWatchResponse> {
        const response = await this.watchWatchRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
