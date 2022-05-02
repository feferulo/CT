import { controller, IAppController } from '@foal/core';
import { createConnection } from 'typeorm';

import { ApiController, OpenApiController } from './controllers';

export class AppController  implements IAppController {
  subControllers = [

    controller('/api', ApiController),
    controller('/swagger', OpenApiController)
  ];

  async init() {
    await createConnection();
  }
}
