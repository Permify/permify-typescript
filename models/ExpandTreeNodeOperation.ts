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


/**
 * Operation is an enum representing the type of operation to be applied on the tree node.
 * @export
 */
export const ExpandTreeNodeOperation = {
    Unspecified: 'OPERATION_UNSPECIFIED',
    Union: 'OPERATION_UNION',
    Intersection: 'OPERATION_INTERSECTION',
    Exclusion: 'OPERATION_EXCLUSION'
} as const;
export type ExpandTreeNodeOperation = typeof ExpandTreeNodeOperation[keyof typeof ExpandTreeNodeOperation];


export function instanceOfExpandTreeNodeOperation(value: any): boolean {
    for (const key in ExpandTreeNodeOperation) {
        if (Object.prototype.hasOwnProperty.call(ExpandTreeNodeOperation, key)) {
            if ((ExpandTreeNodeOperation as Record<string, ExpandTreeNodeOperation>)[key] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ExpandTreeNodeOperationFromJSON(json: any): ExpandTreeNodeOperation {
    return ExpandTreeNodeOperationFromJSONTyped(json, false);
}

export function ExpandTreeNodeOperationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExpandTreeNodeOperation {
    return json as ExpandTreeNodeOperation;
}

export function ExpandTreeNodeOperationToJSON(value?: ExpandTreeNodeOperation | null): any {
    return value as any;
}
