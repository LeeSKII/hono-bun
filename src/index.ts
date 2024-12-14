import { Hono } from "hono";

import testMid from "@/middleware/test-mid";
import routerLoader from "@/router";

const app = new Hono();
// 中间件是严格按照注册顺序执行的，所以注册顺序很重要
app.use(testMid());

routerLoader(app);
//如果中间件的位置在这里，那么上述所有注册的路由将不会生效，因为中间件的注册顺序在路由之前。
// app.use(testMid());
app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
