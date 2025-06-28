import { INTERNAL_SERVER_ERROR, OK } from "../http-status-codes.js";
const onError = (err, c) => {
  const currentStatus = "status" in err ? err.status : c.newResponse(null).status;
  const statusCode = currentStatus !== OK ? currentStatus : INTERNAL_SERVER_ERROR;
  const env = c.env?.NODE_ENV || process.env?.NODE_ENV;
  return c.json(
    {
      message: err.message,
      stack: env === "production" ? void 0 : err.stack
    },
    statusCode
  );
};
export default onError;
