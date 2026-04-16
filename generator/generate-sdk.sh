#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="${SCRIPT_DIR}/.."
OPENAPI_FILE="${SCRIPT_DIR}/openapi.json"
GENERATOR_VERSION="7.21.0"
JAR_PATH="${SCRIPT_DIR}/openapi-generator-cli.jar"
TMP_DIR="$(mktemp -d)"
PACKAGE_VERSION="$(sed -n 's/^[[:space:]]*"version":[[:space:]]*"\([^"]*\)".*/\1/p' "${PROJECT_ROOT}/package.json" | head -n 1)"

cleanup() {
  rm -rf "${TMP_DIR}" "${JAR_PATH}"
}

trap cleanup EXIT

if [[ ! -f "${OPENAPI_FILE}" ]]; then
  echo "OpenAPI file not found at ${OPENAPI_FILE}" >&2
  exit 1
fi

if [[ -z "${PACKAGE_VERSION}" ]]; then
  echo "Could not determine package version from ${PROJECT_ROOT}/package.json" >&2
  exit 1
fi

echo "Downloading openapi-generator-cli..."
curl -fsSL "https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/${GENERATOR_VERSION}/openapi-generator-cli-${GENERATOR_VERSION}.jar" \
  -o "${JAR_PATH}"

echo "Generating TypeScript SDK..."
java -jar "${JAR_PATH}" generate \
  --input-spec "${OPENAPI_FILE}" \
  --generator-name typescript-fetch \
  --output "${TMP_DIR}" \
  --additional-properties "npmName=permify-typescript,npmVersion=${PACKAGE_VERSION},supportsES6=true,removeEnumValuePrefix=true" \
  --skip-validate-spec

# With npmName set, typescript-fetch writes sources under src/ (openapi-generator >= 7.10).
SRC_DIR="${TMP_DIR}/src"

# Sync only generator-owned files so package/test/workflow files remain repo-owned.
rsync -a --delete "${SRC_DIR}/apis/" "${PROJECT_ROOT}/apis/"
rsync -a --delete "${SRC_DIR}/models/" "${PROJECT_ROOT}/models/"
rsync -a --delete "${TMP_DIR}/.openapi-generator/" "${PROJECT_ROOT}/.openapi-generator/"
cp "${SRC_DIR}/index.ts" "${PROJECT_ROOT}/index.ts"
cp "${SRC_DIR}/runtime.ts" "${PROJECT_ROOT}/runtime.ts"

echo "Generation complete."
