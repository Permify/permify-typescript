# permify-typescript
Permify Typescript Client


## Getting Started

```typescript
import * as permify from "permify-typescript";

const configuration = new permify.Configuration({
    basePath: "http://localhost:3476",
    headers: {
        'Authorization': "Bearer ***"
    }
})

const apiInstance = new permify.TenancyApi(configuration);

let tenantId = "tenant_id_example"; 

apiInstance.tenantsCreate({
    body: {
        id: tenantId,
        name: "Tenant 1"
    }
}).then((data) => {
    console.log('API called successfully. Returned data: ' + data.tenant);
}).catch((error) => console.error(error));

```