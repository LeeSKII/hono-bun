import { createMiddleware } from "hono/factory";

const testMid = () => {
  return createMiddleware(async (ctx, next) => {
    console.log("test middleware start");
    await next();
    console.log("test middleware end");
  });
};

export default testMid;
