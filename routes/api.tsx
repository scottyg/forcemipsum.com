import { Head } from "$fresh/runtime.ts";
import Footer from "../components/Footer.tsx";

export default function Api() {
  return (
    <div>
      <div class="flex justify-between my-8">
        <h1 class="text-gray-900 dark:text-gray-300 text-xl font-bold">
          <a href="/">
            <img
              src="/favicon.svg"
              alt="Forcem Ipsum"
              class="w-5 h-5 mr-2 inline-block"
            />
            Forcem Ipsum
            <span class="block md:inline-block text-base text-yellow-400 font-normal ml-0 md:ml-2">
              the Star Wars text generator
            </span>
          </a>
        </h1>
      </div>
      <div>
        <h2 class="text-xl mb-2 font-bold text-gray-900 dark:text-gray-300">
          Web API
        </h2>
        <p class="mb-2 text-gray-900 dark:text-gray-300">
          Basic url structure https://forcemipsum.com/api/<em class="font-bold">
            content
          </em>/<em class="font-bold">count</em>/
        </p>
        <p class="mb-2 text-gray-900 dark:text-gray-300">
          Possible content: Episodes, Characters, Places
        </p>
        <h3 class="mb-2 mt-4 font-bold text-gray-900 dark:text-gray-300">
          Episodes
        </h3>
        <p class="mb-2 text-gray-900 dark:text-gray-300">
          1, 2, 3, 4, 5, 6, 7, 8, 9
        </p>
        <p class="mb-5">
          <span class="border-l-4 pl-4 py-2 block text-sm font-mono text-gray-500">
            https://forcemipsum.com/api/episode-4/5/
          </span>
        </p>
        <p class="mb-5 text-gray-900 dark:text-gray-300">
          <span class="border-l-4 pl-4 py-2 block text-sm font-mono text-gray-500">
            https://forcemipsum.com/api/4/10/
          </span>
        </p>
        <h3 class="mb-2 mt-4 font-bold text-gray-900 dark:text-gray-300">
          Characters
        </h3>
        <p class="mb-5 text-gray-900 dark:text-gray-300">
          <span class="border-l-4 pl-4 py-2 block text-sm font-mono text-gray-500">
            https://forcemipsum.com/api/characters/5/
          </span>
        </p>

        <h3 class="mb-2 mt-4 font-bold text-gray-900 dark:text-gray-300">
          Places
        </h3>
        <p class="mb-5 text-gray-900 dark:text-gray-300">
          <span class="border-l-4 pl-4 py-2 block text-sm font-mono text-gray-500">
            https://forcemipsum.com/api/places/5/
          </span>
        </p>

        <h2 class="text-xl mb-2 mt-4 font-bold text-gray-900 dark:text-gray-300">
          Javascript / Typescript
        </h2>
        <p class="mb-5 text-gray-900 dark:text-gray-300">
          <span class="border-l-4 pl-4 py-2 block text-sm font-mono text-gray-500">
            forcem(content: string, count: number);
          </span>
        </p>

        <h3 class="text-lg mb-2 mt-4 font-bold text-gray-900 dark:text-gray-300">
          Deno Module
        </h3>
        <p class="mb-2 text-gray-900 dark:text-gray-300">
          The Deno module is located at{" "}
          <a
            href="https://deno.land/x/forcemipsum"
            target="_blank"
            class="underline hover:text-yellow-400"
          >
            https://deno.land/x/forcemipsum
          </a>.
        </p>
        <p class="mb-5">
          <span class="border-l-4 pl-4 py-2 block text-sm font-mono text-gray-500">
            import 	&#123; forcem &#125; from
            "https://deno.land/x/forcemipsum/mod.ts";<br />
            const example = forcem('episode 4', 5);<br />
            console.log(example);
          </span>
        </p>

        <h3 class="text-lg mb-2 mt-4 font-bold text-gray-900 dark:text-gray-300">
          NPM Package
        </h3>
        <p class="mb-2 text-gray-900 dark:text-gray-300">
          The NPM package is located at{" "}
          <a
            href="https://www.npmjs.com/package/forcem-ipsum"
            target="_blank"
            class="underline hover:text-yellow-400"
          >
            https://www.npmjs.com/package/forcem-ipsum
          </a>.
        </p>
        <p class="mb-5 text-gray-900 dark:text-gray-300">
          <span class="border-l-4 pl-4 py-2 block text-sm font-mono text-gray-500">
            npm i forcem-ipsum
          </span>
        </p>

        <p class="mb-5 text-gray-900 dark:text-gray-300">
          <span class="border-l-4 pl-4 py-2 block text-sm font-mono text-gray-500">
            var forcem = require('forcem');<br />
            const example = forcem('episode 4', 5);<br />
            console.log(example);
          </span>
        </p>
      </div>
      <Footer />
    </div>
  );
}
