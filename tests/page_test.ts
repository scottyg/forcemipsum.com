import { createHandler, ServeHandlerInfo } from "$fresh/server.ts";
import manifest from "../fresh.gen.ts";
import {
  assert,
  assertEquals,
} from "https://deno.land/std@0.199.0/assert/mod.ts";

const CONN_INFO: ServeHandlerInfo = {
  remoteAddr: { hostname: "127.0.0.1", port: 53496, transport: "tcp" },
};

Deno.test("HTTP assert test.", async (t) => {
  const handler = await createHandler(manifest);

  await t.step("index", async () => {
    const resp = await handler(new Request("http://127.0.0.1/"), CONN_INFO);
    assertEquals(resp.status, 200);
  });

  await t.step("api landing page", async () => {
    const resp = await handler(new Request("http://127.0.0.1/api"), CONN_INFO);
    const text = await resp.text();
    assert(text.includes("Web API"));
  });

  await t.step("api content", async () => {
    const resp = await handler(
      new Request("http://127.0.0.1/api/4/1"),
      CONN_INFO,
    );
    const text = await resp.text();
    assert(
      text.includes(
        "Did you hear that? They've shut down the main reactor. We'll be destroyed for sure.",
      ),
    );
  });

  await t.step("api count", async () => {
    const resp = await handler(
      new Request("http://127.0.0.1/api/4/10"),
      CONN_INFO,
    );
    const text = await resp.text();
    assert(JSON.parse(text).length === 10);
  });
});
