import { Handler } from '@netlify/functions';

export const handler: Handler = async (event, context) => {
  console.log({ event, context });
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello World from Lambda Compatible Handler' }),
  };
};
