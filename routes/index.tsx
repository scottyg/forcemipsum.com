/** @jsx h */
import { Head } from "$fresh/runtime.ts";
import { h } from "preact";
import { tw } from "@twind";
import Forcem from "../islands/Forcem.tsx";
import Footer from "../islands/Footer.tsx";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Forcem Ipsum</title>
        <meta
          name="builtWith"
          content="Built with Deno Fresh https://fresh.deno.dev/"
        />
        <meta name="description" content="the Star Wars text generator" />

        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        <link
          rel="icon"
          type="image/svg+xml"
          href="/favicon.svg"
        />

        <meta property="og:title" content="Forcem Ipsum" />
        <meta
          property="og:description"
          content="the Star Wars text generator"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://forcemipsum.com/" />
        <meta
          property="og:image"
          content="https://forcemipsum.com/forcemipsum-favicon.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="forcemipsum.com" />
        <meta property="twitter:url" content="https://forcemipsum.com/" />
        <meta name="twitter:title" content="Forcem Ipsum" />
        <meta
          name="twitter:description"
          content="the Star Wars text generator"
        />
        <meta
          name="twitter:image"
          content="https://forcemipsum.com/forcemipsum-favicon.png"
        />
      </Head>
      <div class={tw`w-screen min-h-screen bg-gray-100`}>
        <div class={tw`p-4 mx-auto container font-sans`}>
          <Forcem count={5} content="4" />
          <Footer />
        </div>
      </div>
    </div>
  );
}
