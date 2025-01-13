import { GetCallerIdentityCommand, STSClient } from "@aws-sdk/client-sts";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseBody = { message: string };

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<ResponseBody>
) {
  try {
    const stsRes = await getCallerIdentity();
    console.info(stsRes);

    if (!stsRes.UserId) {
      throw new Error("UserId not found");
    }

    res.status(200).json({ message: "OK" });
    return;
  } catch (error) {
    res.status(500).json({ message: "Error getting caller identity" });
  }
}

/**
 * Function that creates IAM Client and returns the callers identity
 * @returns Promise containing caller identity response
 */
async function getCallerIdentity() {
  const client = new STSClient({
    region: process.env.AWS_REGION || "us-east-1",
  });

  try {
    const command = new GetCallerIdentityCommand({});
    const response = await client.send(command);
    return response;
  } catch (error) {
    console.error("Error getting caller identity:", error);
    throw error;
  }
}
