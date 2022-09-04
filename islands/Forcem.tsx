/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";
import { forcem } from "https://deno.land/x/forcemipsum@0.1.0/mod.ts";

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
      <div class={tw`flex justify-between flex-col md:flex-row mb-2`}>
        <h1 class={tw`text-gray-700 text-xl font-bold`}>
          <img
            src="/favicon.svg"
            alt="Forcem Ipsum"
            class={tw`w-5 h-5 mr-2 inline-block`}
          />
          Forcem Ipsum
          <span
            class={tw`block md:inline-block text-base text-yellow-400 font-normal ml-0 md:ml-2`}
          >
            the Star Wars text generator
          </span>
        </h1>

        <div class={tw`flex`}>
          <a
            href="/api"
            class={tw`px-2 mr-2 text(base gray-700 hover:yellow-400) underline h-8 rounded cursor-pointer focus:outline-none focus:ring-0 flex items-center`}
          >
            Try the new API!
          </a>
          <select
            onChange={() => setContent(event.target.value)}
            class={tw` px-2 mr-2 text(base gray-700 hover:gray-800) hover:border-yellow-400 border-1 border-gray-200 h-8 rounded cursor-pointer focus:outline-none focus:ring-0 bg-gray-100`}
          >
            <option value="1">Episode 1</option>
            <option value="4" selected>Episode 4</option>
            <option value="5">Episode 5</option>
            <option value="6">Episode 6</option>
            <option value="7">Episode 7</option>
            <option value="characters">Characters</option>
            <option value="places">Places</option>
          </select>

          <Button
            disabled={disabled}
            onClick={() => setCount(count - 1)}
            class={tw`w-8  h-8 text(base gray-700 hover:gray-800) border(1 hover:yellow-400) rounded-l cursor-pointer focus:outline-none focus:ring-0 flex items-center justify-center`}
          >
            -
          </Button>
          <span
            class={tw`w-auto px-4 text(base gray-800 hover:gray-800) bg-gray-200 border-1 h-8 outline-none flex items-center justify-center`}
          >
            {count}
          </span>
          <Button
            onClick={() => setCount(count + 1)}
            class={tw`w-8 text(base gray-700 hover:gray-800) hover:border-yellow-400 border-1 border-gray-200 h-8 rounded-r cursor-pointer focus:outline-none focus:ring-0  flex items-center justify-center`}
          >
            +
          </Button>
        </div>
      </div>
      <div class={tw``}>
        {resp.map((line) => {
          return <p class={tw`mb-2 text-gray-700`}>{line}</p>;
        })}
      </div>
    </div>
  );
}
