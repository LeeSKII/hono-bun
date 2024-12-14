import type { Hono } from "hono";
import book from "@/router/book";

export default function routerLoader(app: Hono) {
  app.route("/v1/book", book);
}
