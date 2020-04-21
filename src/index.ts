import { APIGatewayEvent } from "aws-lambda";

export function sayHello(to: string): string {
  return `Hello ${to}!`;
}

const handler = async (event: APIGatewayEvent): Promise<any> => {
  console.log(sayHello("world"));
  const response = JSON.stringify(event, null, 2);
  return response;
};

export default handler;
