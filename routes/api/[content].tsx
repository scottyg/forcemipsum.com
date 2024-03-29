import { HandlerContext, Handlers } from "$fresh/server.ts";
import { forcem } from "https://deno.land/x/forcemipsum@3.0.0/mod.ts";

export const handler: Handlers = {
  GET(_req: Request, _ctx: HandlerContext) {
    const resp = forcem(_ctx.params.content, 5);
    return new Response(JSON.stringify(resp), {
      headers: { "Content-Type": "application/json" },
    });
  },
};
