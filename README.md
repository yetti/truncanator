# truncanator

Truncates text in batches by removing a specified prefix or suffix.
It can also remove duplicates if required.

## Building

truncanator uses [TailwindCSS](https://tailwindcss.com/) (version v3.0.24) and [TailwindUI](https://tailwindui.com/).

To use Tailwind without NodeJs, you will need to install the latest version of the standalone [Tailwind CLI](https://github.com/tailwindlabs/tailwindcss/releases/latest) for your OS.

```bash
# Install for arm64 macOS
curl -sLO https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-macos-arm64
chmod +x tailwindcss-macos-arm64
mv tailwindcss-macos-arm64 tailwind

# Start a watcher for development
./tailwind -i assets/css/style.css -o public/css/style.css --watch

# Compile and minify the final CSS for production
./tailwind -i assets/css/style.css -o public/css/style.css --minify
```

### Auto browser reload (optional)

If you want to auto-reload your browser on file changes, there are various NodeJS packages that can help.

#### Browsersync

Install [Browsersync](https://browsersync.io/) globally:

```bash
npm install -g browser-sync

# Ignore the output file compiled by Tailwind CLI
browser-sync start --server --ignore "public/css/style.css"
```

#### live-server

Install [live-server](http://tapiov.net/live-server/) globally:

```bash
npm install -g live-server

# Start the server and ignore the output file compiled by Tailwind CLI
live-server --ignore="public/css/style.css"
```

## Attribution

* Axe icon by [Cultures icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/cultures)
