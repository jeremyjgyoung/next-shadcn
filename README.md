# Project Starter

Five simple pages, a shared navbar, and PocketBase sign-in and signup. Page Five requires a login. The other four pages work before you connect a database.

## Start locally

Install Node **24** and pnpm **11.19.0**, then open a terminal in this folder:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open the address printed in the terminal. Keep the terminal running while you work.

## Pages

| Address       | File under `src/app`  | Access            |
| ------------- | --------------------- | ----------------- |
| `/`           | `page.jsx`            | Public — Page One |
| `/page-two`   | `page-two/page.jsx`   | Public            |
| `/page-three` | `page-three/page.jsx` | Public            |
| `/page-four`  | `page-four/page.jsx`  | Public            |
| `/page-five`  | `page-five/page.jsx`  | Signed in         |
| `/sign-in`    | `sign-in/page.jsx`    | Sign in           |
| `/sign-up`    | `sign-up/page.jsx`    | Create account    |

Each page contains its own code. Open that file to change its heading or add content. The navbar lives in `src/components/navbar.jsx`. Edit its `pages` array when you rename a page or add a route.

## Connect PocketBase

Find your PocketBase link in the LMS. Open `src/pocketbase.js` and replace `https://????.pockethost.io` with your link. This placeholder is not a working address.

Follow **README-auth.md** to configure the `users` authentication collection. After creating an account or signing in, you arrive at Page Five. Sign out using the navbar.

You can also set `NEXT_PUBLIC_POCKETBASE_URL` in `.env.local`. It overrides the file setting. Restart development after a change; rebuild production after changing a browser environment variable. A database URL is public configuration. Never put a superuser password or API secret in a `NEXT_PUBLIC_` variable.

## Tools already connected

| Tool                            | What it does                                                 |
| ------------------------------- | ------------------------------------------------------------ |
| Next.js 16.4.2 and React 19.3.0 | Pages and interactive UI                                     |
| shadcn, Base UI, Tailwind CSS   | Ready-to-use components and styling                          |
| TanStack Query                  | Shared database request cache, loading states, and refreshes |
| PocketBase SDK 0.28.1           | Connects to a PocketBase v0.40.x server                      |
| React Hook Form                 | Collects and checks the sign-in and signup form values       |
| Lucide                          | Icons                                                        |
| next-themes                     | Light, dark, and system themes                               |
| Base UI Toast provider          | Ready for notifications                                      |

The SDK version and PocketBase server version are different numbering systems.

All 62 UI component files from the tested demo are included. Read **COMPONENTS.md** for the inventory and an import example. Read **README-database.md** for the database hooks. Read **README-codesandbox.md** for upload instructions.

## JavaScript and client pages

The numbered pages and auth pages start with `"use client"`. This allows hooks, click handlers, and browser auth state. You can add ordinary `.js` and `.jsx` files without types. Type checking for JavaScript is off; the supplied UI library still uses TypeScript.

Use named functions and named exports for your components and hooks. Next.js page and layout files use default exports because Next.js requires them. The root layout stays a Server Component so it can export page metadata.

## Protection model

Page Five waits for the browser's saved login, redirects signed-out visitors, and asks PocketBase for the signed-in user's record. PocketBase rules must reject access to other users' records. The browser redirect does not protect secrets embedded in JavaScript or HTML. Server-protected pages and server sessions are outside this starter.

## Checks

```sh
pnpm check
pnpm build
pnpm start
```

`check` runs lint, type checking, and formatting checks. `pnpm build:webpack` is also available.
