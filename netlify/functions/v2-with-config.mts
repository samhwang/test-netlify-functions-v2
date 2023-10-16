import { Context, Config } from '@netlify/functions';

export default async function (request: Request, context: Context) {
  console.log({ request, context });
  return new Response('Hello World from v2 Handler!');
}

export const config: Config = {
  path: '/api/v2-with-config',
}
