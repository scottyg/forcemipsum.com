import { useState } from "preact/hooks";
import { forcem } from "https://deno.land/x/forcemipsum@0.3.0/mod.ts";

import { Button } from "../components/Button.tsx";

interface ForcemProps {
  content: string;
  count: number;
}

export default function Forcem(props: ForcemProps) {
  const [content, setContent] = useState(props.content);
  const [count, setCount] = useState(props.count);

  const resp: string[] = forcem(content, count);
  let copy = "";
  resp.map((line) => {
    copy = copy + line + "\n\n";
  });
  let disabled = false;
  if (count == 1) {
    disabled = true;
  }

  return (
    <div>
      <div class="flex justify-between flex-col md:flex-row my-8">
        <h1 class="text-gray-900 dark:text-gray-300 text-xl font-bold">
          <img
            src="/favicon.svg"
            alt="Forcem Ipsum"
            class="w-5 h-5 mr-2 inline-block"
          />
          Forcem Ipsum
          <span class="block md:inline-block text-base text-yellow-400 font-normal ml-0 md:ml-2">
            the Star Wars text generator
          </span>
        </h1>

        <div class="flex flex-col md:flex-row">
          <a
            href="/api"
            class="px-2 mr-2 text(base gray-900 dark:gray-300 hover:yellow-400) underline h-8 rounded cursor-pointer focus:outline-none focus:ring-0 flex items-center"
          >
            Try the new API!
          </a>

          <div class="flex">
            <select
              onChange={() => setContent(event.target.value)}
              class=" px-2 mr-2 text(base gray-900 hover:gray-800) hover:border-yellow-400 border-1 border-gray-200 h-8 rounded cursor-pointer focus:outline-none focus:ring-0 bg-gray-100"
            >
              <option value="1">Episode 1</option>
              <option value="4" selected>Episode 4</option>
              <option value="5">Episode 5</option>
              <option value="6">Episode 6</option>
              <option value="7">Episode 7</option>
              <option value="8">Episode 8</option>
              <option value="9">Episode 9</option>
              <option value="characters">Characters</option>
              <option value="places">Places</option>
            </select>

            <Button
              disabled={disabled}
              onClick={() => setCount(count - 1)}
              class="w-8  h-8 text(base gray-300 hover:gray-500) border(1 hover:yellow-400) rounded-l cursor-pointer focus:outline-none focus:ring-0 flex items-center justify-center"
            >
              -
            </Button>
            <span class="w-auto px-4 text(base gray-800 hover:gray-500) bg-gray-200 border-1 h-8 outline-none flex items-center justify-center">
              {count}
            </span>
            <Button
              onClick={() => setCount(count + 1)}
              class="w-8 text(base gray-300 hover:gray-500) hover:border-yellow-400 border-1 border-gray-200 h-8 rounded-r cursor-pointer focus:outline-none focus:ring-0  flex items-center justify-center"
            >
              +
            </Button>
          </div>
        </div>
      </div>
      <div class="">
        {resp.map((line) => {
          return <p class="pb-4 text-gray-900 dark:text-gray-300">{line}</p>;
        })}
      </div>
    </div>
  );
}
