/** @jsx h */
import { Head } from "$fresh/runtime.ts";
import { h } from "preact";
import { tw } from "@twind";
import Footer from "../islands/Footer.tsx";

export default function Api() {
  return (
    <div>
      <Head>
        <title>Forcem Ipsum</title>
        <meta
          name="builtWith"
          content="Built with Deno Fresh https://fresh.deno.dev/"
        />
        <meta name="description" content="the Star Wars text generator" />

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
        <div class={tw`p-4 mx-auto container`}>
          <div class={tw`flex justify-between mb-2`}>
            <h1 class={tw`text-gray-700 dark:text-white text-xl font-bold`}>
              <a href="/">
                Forcem Ipsum
                <span
                  class={tw`block md:inline-block text-base text-yellow-400 dark:text-yellow-400 font-normal ml-0 md:ml-2`}
                >
                  the Star Wars text generator
                </span>
              </a>
            </h1>
          </div>
          <div>
            <h2 class={`text-xl mb-2 font-bold text-gray-700`}>Web API</h2>
            <p class={tw`mb-2 text-gray-700`}>
              Basic url structure https://forcemipsum.com/api/<em
                class={tw`font-bold`}
              >
                content
              </em>/<em class={tw`font-bold`}>count</em>/
            </p>
            <p class={tw`mb-2 text-gray-700`}>
              Possible content: Episodes, Characters, Places
            </p>
            <h3 class={tw`text-sm mb-2 font-bold text-gray-700`}>Episodes</h3>
            <p class={tw`mb-2 text-gray-700`}>1, 4, 5, 6, 7</p>
            <p class={tw`mb-5`}>
              <span
                class={tw`bg-gray-300 rounded w-auto p-2 text-sm font-mono text-gray-700`}
              >
                https://forcemipsum.com/api/episode-4/5/
              </span>
            </p>
            <p class={tw`mb-5 text-gray-700`}>
              <span
                class={tw`bg-gray-300 rounded w-auto p-2 text-sm font-mono text-gray-700`}
              >
                https://forcemipsum.com/api/4/10/
              </span>
            </p>
            <h3 class={tw`text-sm mb-2 font-bold text-gray-700`}>Characters</h3>
            <p class={tw`mb-5 text-gray-700`}>
              <span
                class={tw`bg-gray-300 rounded w-auto p-2 text-sm font-mono text-gray-700`}
              >
                https://forcemipsum.com/api/characters/5/
              </span>
            </p>

            <h3 class={tw`text-sm mb-2 font-bold text-gray-700`}>Places</h3>
            <p class={tw`mb-5 text-gray-700`}>
              <span
                class={tw`bg-gray-300 rounded w-auto p-2 text-sm font-mono text-gray-700`}
              >
                https://forcemipsum.com/api/places/5/
              </span>
            </p>

            <h2 class={`text-xl mb-2 font-bold text-gray-700`}>Javascript / Typescript</h2>
            <p class={tw`mb-5 text-gray-700`}>
              <span
                class={tw`bg-gray-300 rounded block w-auto p-2 inline block text-sm font-mono text-gray-700`}
              >
                forcem(content: string, count: number);
              </span>
            </p>

            <h3 class={`text-lg mb-2 font-bold text-gray-700`}>Deno Module</h3>
            <p class={tw`mb-2 text-gray-700`}>
              The Deno module is located at{" "}
              <a
                href="https://deno.land/x/forcemipsum"
                target="_blank"
                class={tw`underline hover:text-yellow-400`}
              >
                https://deno.land/x/forcemipsum
              </a>.
            </p>
            <p class={tw`mb-5`}>
              <span
                class={tw`bg-gray-300 rounded block w-auto p-2 text-sm font-mono text-gray-700`}
              >
                import 	&#123; forcem &#125; from
                "https://deno.land/x/forcemipsum/mod.ts";<br />
                const example = forcem('episode 4', 5);<br />
                console.log(example);
              </span>
            </p>

            <h3 class={`text-lg mb-2 font-bold text-gray-700`}>NPM Package</h3>
            <p class={tw`mb-2 text-gray-700`}>
              The NPM package is located at{" "}
              <a
                href="https://www.npmjs.com/package/forcem-ipsum"
                target="_blank"
                class={tw`underline hover:text-yellow-400`}
              >
                https://www.npmjs.com/package/forcem-ipsum
              </a>.
            </p>
            <p class={tw`mb-5 text-gray-700`}>
              <span
                class={tw`bg-gray-300 rounded w-auto p-2 text-sm font-mono text-gray-700`}
              >
                npm i forcem-ipsum
              </span>
            </p>

            <p class={tw`mb-5 text-gray-700`}>
              <span
                class={tw`bg-gray-300 rounded block w-auto p-2 text-sm font-mono text-gray-700`}
              >
                var forcem = require('forcem');<br />
                const example = forcem('episode 4', 5);<br />
                console.log(example);
              </span>
            </p>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
