# Prebuilt deploy for cPanel / CloudLinux Node.js Selector

## Goal

Build the app locally with Node.js 20, upload the ready-to-run runtime bundle, and only start it on cPanel.

## Local build

Run this on your local machine inside the project:

```bash
npm install
npm run build:cpanel
```

That creates:

```text
cpanel-runtime/
```

Upload the contents of `cpanel-runtime/` to your cPanel application root.

## Node.js Selector settings (IMPORTANT)

In cPanel → Node.js Selector, set:

- **Node.js version**: `20`
- **Application mode**: `production`
- **Application startup file**: `server.js`
- **Application root**: the folder where you uploaded cpanel-runtime contents

After changing settings, click **Save** then **Restart**.

## Upload contents

Upload everything inside `cpanel-runtime/` to the application root, including:

- `server.js`
- `.next/`
- `node_modules/`
- `public/`
- `.htaccess`
- `package.json`

**Do NOT run `npm install` on cPanel** — the `node_modules/` from the standalone build is already included.

## Environment variables

Set these in Node.js Selector before starting the app:

- `NODE_ENV=production`
- Any other env vars your app needs

## Start flow

1. Build locally: `npm run build:cpanel`
2. Zip the `cpanel-runtime/` folder contents
3. Upload and extract to your cPanel application root
4. In Node.js Selector: set Node 20, startup file = `server.js`, mode = production
5. Click Save → Restart
6. Check stderr.log in cPanel file manager if you still see 503

## Troubleshooting 503

Common causes:
- Wrong Node.js version (must be 20)
- Startup file not set to `server.js`
- App not restarted after upload
- `node_modules/` not uploaded (must be included from cpanel-runtime)
