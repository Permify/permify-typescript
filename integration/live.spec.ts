import assert from 'node:assert/strict';
import test from 'node:test';
import {
  CheckResult,
  Configuration,
  DataApi,
  PermissionApi,
  SchemaApi,
} from '../index';

const PERMIFY_BASE_URL = process.env.PERMIFY_BASE_URL || 'http://127.0.0.1:3476';
const TENANT_ID = 't1';
const RUN_ID = Date.now().toString(36);

function createApis() {
  const configuration = new Configuration({ basePath: PERMIFY_BASE_URL });

  return {
    schema: new SchemaApi(configuration),
    data: new DataApi(configuration),
    permission: new PermissionApi(configuration),
  };
}

test('denies a permission check when no relationship exists', { timeout: 20000 }, async () => {
  const apis = createApis();
  const documentId = `denieddoc${RUN_ID}`;
  const subjectId = `denieduser${RUN_ID}`;
  const schema = `
    entity user {}

    entity document {
      relation viewer @user

      action view = viewer
    }
  `;

  const schemaWrite = await apis.schema.schemasWrite({
    tenantId: TENANT_ID,
    body: {
      schema,
    },
  });

  assert.ok(schemaWrite.schemaVersion);

  const check = await apis.permission.permissionsCheck({
    tenantId: TENANT_ID,
    body: {
      metadata: {
        snapToken: '',
        schemaVersion: schemaWrite.schemaVersion,
        depth: 20,
      },
      entity: {
        type: 'document',
        id: documentId,
      },
      permission: 'view',
      subject: {
        type: 'user',
        id: subjectId,
      },
    },
  });

  assert.strictEqual(check.can, CheckResult.Denied);
});

test('looks up entities a subject can view', { timeout: 20000 }, async () => {
  const apis = createApis();
  const subjectId = `lookupuser${RUN_ID}`;
  const expectedEntityIds = [
    `lookupdoca${RUN_ID}`,
    `lookupdocb${RUN_ID}`,
    `lookupdocc${RUN_ID}`,
  ];
  const schema = `
    entity user {}

    entity document {
      relation viewer @user

      action view = viewer
    }
  `;

  const schemaWrite = await apis.schema.schemasWrite({
    tenantId: TENANT_ID,
    body: {
      schema,
    },
  });

  assert.ok(schemaWrite.schemaVersion);

  const dataWrite = await apis.data.dataWrite({
    tenantId: TENANT_ID,
    body: {
      metadata: {
        schemaVersion: schemaWrite.schemaVersion,
      },
      tuples: [
        {
          entity: {
            type: 'document',
            id: expectedEntityIds[0],
          },
          relation: 'viewer',
          subject: {
            type: 'user',
            id: subjectId,
          },
        },
        {
          entity: {
            type: 'document',
            id: expectedEntityIds[1],
          },
          relation: 'viewer',
          subject: {
            type: 'user',
            id: subjectId,
          },
        },
        {
          entity: {
            type: 'document',
            id: expectedEntityIds[2],
          },
          relation: 'viewer',
          subject: {
            type: 'user',
            id: subjectId,
          },
        },
      ],
    },
  });

  const lookup = await apis.permission.permissionsLookupEntity({
    tenantId: TENANT_ID,
    body: {
      metadata: {
        snapToken: dataWrite.snapToken,
        schemaVersion: schemaWrite.schemaVersion,
        depth: 20,
      },
      entityType: 'document',
      permission: 'view',
      subject: {
        type: 'user',
        id: subjectId,
      },
    },
  });

  assert.deepStrictEqual((lookup.entityIds || []).sort(), expectedEntityIds.sort());
});
