import { useState } from "preact/hooks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div>
      <footer class="w-full flex my-8 justify-between flex-col md:flex-row">
        <div class="font-normal flex-grow text-left">
          <a
            href="https://github.com/scottyg/"
            class="text-gray-900 dark:text-gray-300 underline hover:text-yellow-400"
          >
            Created by Scotty G
          </a>
        </div>
        <div class="font-normal text-left text-gray-900 dark:text-gray-300">
          Forcem Ipsum © {year}
        </div>
      </footer>
    </div>
  );
}
