import express from "express";
import { getCmsPayloadClient } from "./get-cms-payload";
import { nextApp, nextHandler } from "./next-utils";
const app = express();
const PORT = Number(process.env.port) || 3000;

const start = async () => {
  const payload = await getCmsPayloadClient({
    initOptions: {
      express: app,
      onInit: async (cms) => {
        cms.logger.info(`ADMIN URL ${cms.getAdminURL()}`);
      },
    },
  });
  app.use((req, res) => nextHandler(req, res));
  nextApp.prepare().then(() => {
    payload.logger.info("Nextjs Started");
    app.listen(PORT, async () => {
      payload.logger.info(
        `Nextjs App Url:${process.env.NEXT_PUBLIC_SERVER_URL}`
      );
    });
  });
};
start();
