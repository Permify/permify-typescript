import assert from 'node:assert/strict';
import test from 'node:test';
import {
  BASE_PATH,
  CheckResult,
  Configuration,
  PermissionCheckResponseFromJSON,
  PermissionApi,
} from '../index';

test('uses the default base path and allows overrides', () => {
  const defaultConfig = new Configuration();
  const customConfig = new Configuration({ basePath: 'http://127.0.0.1:3476' });

  assert.strictEqual(defaultConfig.basePath, BASE_PATH);
  assert.strictEqual(customConfig.basePath, 'http://127.0.0.1:3476');
});

test('exports generated enums and response mappers', () => {
  const response = PermissionCheckResponseFromJSON({
    can: 'CHECK_RESULT_DENIED',
  });

  assert.strictEqual(response.can, CheckResult.Denied);
});

test('instantiates API classes with a configuration', () => {
  const api = new PermissionApi(new Configuration({ basePath: 'http://127.0.0.1:3476' }));

  assert.ok(api);
});
