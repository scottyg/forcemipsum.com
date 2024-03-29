/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";

import { ga4Plugin } from "https://deno.land/x/fresh_ga4@0.0.2/mod.ts";

await start(manifest, { plugins: [twindPlugin(twindConfig), ga4Plugin()] });
