import dotenv from "dotenv";
import path from "path";
import type { InitOptions } from "payload/config"; //payload package needs to be installed
import payload from "payload";

dotenv.config({
  path: path.resolve(__dirname, "../.env"), //__dirname takes current directory which in this case is src folder
});
let cached = (global as any).payload;

if (!cached) {
  cached = (global as any).payload = {
    client: null,
    promise: null,
  };
}

interface Args {
  initOptions?: Partial<InitOptions>;
}
export const getCmsPayloadClient = async ({ initOptions }: Args = {}) => {
  if (!process.env.PAYLOAD_SECRET) throw new Error("PAYLOAD SECRET IS MISSING");
  if (cached.client) return cached.client;
  if (!cached.promise) {
    cached.promise = payload.init({
      secret: process.env.PAYLOAD_SECRET,
      local: initOptions?.express ? false : true,
      ...(initOptions || {}),
    });
  }
  try {
    cached.client=await cached.promise
  } catch (error:unknown) {
    cached.promise=null
    throw error
  }
  return cached.client
};
