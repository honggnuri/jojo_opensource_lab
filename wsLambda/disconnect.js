import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DeleteCommand } from "@aws-sdk/lib-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient();
const ddb = DynamoDBDocumentClient.from(client);

const TABLE = "Connections";

export const handler = async (event) => {
  const connectionId = event.requestContext.connectionId;

  await ddb.send(
    new DeleteCommand({
      TableName: TABLE,
      Key: { connectionId }
    })
  );

  return { statusCode: 200 };
};
