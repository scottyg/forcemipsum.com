import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,600;0,700;1,100;1,300;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/app.css" />
      </head>
      <body class="dark:bg-gray-900">
        <div class="w-full">
          <div class="px-4 mx-auto max-w-6xl">
            <Component />
          </div>
        </div>
      </body>
    </html>
  );
}
