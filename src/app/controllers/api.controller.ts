import { Context, Get, HttpResponseOK } from '@foal/core';
import { ApiInfo, ApiServer, ApiDefineSchema } from '@foal/core';
import { ApiResponse } from '@foal/core';

@ApiDefineSchema('trader', {
  type: 'object',
  properties: {
    name: { type: 'string' }
  },
  required: [ 'name' ],
})
@ApiInfo({
  title: 'CopyToken API',
  version: '1.0.0'
})
@ApiServer({
  url: '/api'
})
export class ApiController {

  @Get('/')
  @ApiResponse(200, { description: 'successful operation' })
  index(ctx: Context) {
    return new HttpResponseOK('Hello world!');
  }

  @Get('/traders')
  @ApiResponse(200, {
    description: 'successful operation',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: { $ref: '#/components/schemas/trader' }
        }
      }
    }
  })
  @ApiResponse(200, { description: 'successful operation' })
  getTraders(ctx: Context) {
    let traders = [{"name": "Monty"}, {"name": "Python"}];
    return new HttpResponseOK(traders);
  }
}





