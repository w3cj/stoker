import type { MiddlewareHandler } from "hono";
declare const serveEmojiFavicon: (emoji: string) => MiddlewareHandler;
export = serveEmojiFavicon;
