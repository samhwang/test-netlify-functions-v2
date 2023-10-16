import { Context } from '@netlify/functions';

export default async function (request: Request, context: Context) {
  console.log({ request, context });
  return new Response('Hello World from v2 Handler!');
}
