// std
import { writeFileSync } from 'fs';

// 3p
import { createOpenApiDocument } from '@foal/core';
import { stringify } from 'yamljs';

// App
import { ApiController } from '../app/controllers';

export async function main() {
  const document = createOpenApiDocument(ApiController);
  const yamlDocument = stringify(document);

  writeFileSync('openapi.yml', yamlDocument, 'utf8');
}
