import { APIGatewayEvent } from "aws-lambda";

const handler = async (event: APIGatewayEvent): Promise<any> => {
  console.log("Hello World!");
  const response = JSON.stringify(event, null, 2);
  return response;
};

export default handler;
