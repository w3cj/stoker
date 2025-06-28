import { UNPROCESSABLE_ENTITY } from "../http-status-codes.js";
const defaultHook = (result, c) => {
  if (!result.success) {
    return c.json(
      {
        success: result.success,
        error: result.error
      },
      UNPROCESSABLE_ENTITY
    );
  }
};
export default defaultHook;
