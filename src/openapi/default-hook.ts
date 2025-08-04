import type { Hook } from "@hono/zod-openapi";

import { UNPROCESSABLE_ENTITY } from "../http-status-codes.js";

const defaultHook: Hook<any, any, any, any> = (result, c) => {
  if (!result.success) {
    return c.json(
      {
        success: result.success,
        error: {
          name: result.error.name,
          issues: result.error.issues,
        },
      },
      UNPROCESSABLE_ENTITY,
    );
  }
};

export default defaultHook;
