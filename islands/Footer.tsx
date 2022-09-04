/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";

export default function Footer() {
  const year = new Date().getFullYear();

  function createMarkup() {
    return {
      __html: `
      
		@media ( prefers-color-scheme: dark ) {
			.text-gray-700 {
				color: #ffffff !important;
			}
      .bg-gray-100{
        background-color: rgba(55, 65, 81, 1);
      }
      .bg-gray-300{
        background-color: rgba(17, 24, 39, 1);
      }
		}
      `,
    };
  }

  return (
    <div>
      <footer class={tw`w-full flex mb-16 justify-between`}>
        <div class={tw`font-normal flex-grow`}>
          <a
            href="https://github.com/scottyg/"
            class={tw`text-gray-700 underline hover:text-yellow-400`}
          >
            Created by Scott Gordon
          </a>
        </div>
        <div class={tw`font-normal text-gray-700`}>
          Forcem Ipsum © {year}
        </div>
      </footer>
      <div
        class={tw`px-4 py-2 bg-gray-700 text-center w-full fixed bottom-0 left-0`}
      >
        <p class={tw`text-white`}>
          Want to help adding the latest movies to Forcem Ipsum? Join me on{" "}
          <a
            href="https://github.com/scottyg/"
            target="_blank"
            class={tw`underline hover:text-yellow-400`}
          >
            Github
          </a>.
        </p>
      </div>
      <style dangerouslySetInnerHTML={createMarkup()}></style>
    </div>
  );
}
