# Run the starter in CodeSandbox

Use a **Node.js Devbox / VM Sandbox**. This project needs a running Next.js server, not a browser-only sandbox.

## Upload and start

1. Create a Node.js Devbox. Back up its sample files and stop its sample task.
2. Upload `next-shadcn-pocketbase-starter.zip` to its file explorer. You can drag the ZIP from your computer. If a browser automation extension blocks local uploads, upload it manually.
3. In the CodeSandbox terminal, extract the ZIP in the workspace root:

   ```sh
   unzip -o next-shadcn-pocketbase-starter.zip
   ```

4. Check that `package.json`, `src`, `.codesandbox`, and `.devcontainer` are directly in the workspace root. Do not run from an enclosing `outputs` folder.
5. If the sample starter left `index.js` or `yarn.lock`, move those files into a backup folder outside the app source. Use `.txt` extensions for sample source backups so checks do not treat them as app code. The app uses `pnpm-lock.yaml`.
6. Accept the prompt to rebuild the development container. It installs Node 24 and pnpm 11.19.0.
7. In Project Setup, choose **Use the current configuration**. Confirm the setup command is `node scripts/codesandbox-setup.mjs` and the development command is `pnpm dev:codesandbox`. Keep environment variables empty unless you want an optional database URL override. Keep the existing VM size. Complete the wizard with Apply.
8. Setup installs the locked dependencies. The **Open starter · port 3000** task starts automatically. If Apply stops it, start that task again from DevTools.
9. Open the port-3000 preview from the Ports panel. Open it in its own browser tab for testing login and browser storage.

The ZIP is flat-root and includes its hidden configuration folders. Uploading it does not extract or run it. Changes to a ZIP do not update an already extracted folder.

## Configuration included

| File                              | Purpose                                                                                  |
| --------------------------------- | ---------------------------------------------------------------------------------------- |
| `.devcontainer/devcontainer.json` | Selects the supplied container and port                                                  |
| `.devcontainer/Dockerfile`        | Node 24 Bookworm and pinned pnpm                                                         |
| `.codesandbox/tasks.json`         | Setup and one automatic development task on port 3000                                    |
| `scripts/codesandbox-setup.mjs`   | Checks versions and installs locked dependencies without an interactive prompt           |
| `next.config.ts`                  | Allows the exact trusted preview host and disables the optional localhost service worker |
| `src/instrumentation-client.js`   | Handles CodeSandbox's embedded inspector during hydration                                |

The current VM hostname determines its preview URL, so a fork does not retain its parent's URL. `APP_ORIGIN` is an optional exact origin override for another trusted reverse proxy. Leave it unset in ordinary CodeSandbox use.

The project has no Next.js database API or local SQLite runtime. PocketBase is a separate service. Set its URL in `src/pocketbase.js` using the link from the LMS; configure accounts as described in README-auth.md. Do not upload `.env.local` with real credentials.

## Useful commands

```sh
pnpm check
pnpm build:webpack
```

Only one server may use port 3000. Do not run `pnpm dev:codesandbox` manually while the automatic development task is already running. Stop development before starting a production server on the same port.

## Troubleshooting

| Symptom                            | Check                                                                                      |
| ---------------------------------- | ------------------------------------------------------------------------------------------ |
| Node is the wrong version          | Rebuild using the supplied container, not Universal Template                               |
| pnpm version mismatch              | Rebuild; the Dockerfile pins 11.19.0                                                       |
| Port is already in use             | Check whether the automatic task is running; do not start a duplicate                      |
| Auth inputs are disabled           | Add your LMS PocketBase URL and restart if using an environment variable                   |
| Signup or account read is rejected | Check the `users` auth collection and its rules                                            |
| Embedded login behaves differently | Open the preview in its own browser tab                                                    |
| Editor task list looks stale       | Check actual task logs and the Ports panel before starting another server                  |
| “Resuming MicroVM” remains stuck   | This is a VM connection problem; use CodeSandbox's restart/recovery control when available |

Keep the original sample backup until the starter is verified. Keep dependencies, caches, real credentials, and runtime data out of any ZIP you distribute to students.
