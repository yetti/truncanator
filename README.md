# truncanator

Truncates text in batches by removing a specified prefix or suffix.
It can also remove duplicates if required.

## Building

truncanator uses [TailwindCSS](https://tailwindcss.com/) (version v3.0.24) and [TailwindUI](https://tailwindui.com/) .

To use Tailwind without NodeJs, you will need to install the latest version of the [Tailwind CLI](https://github.com/tailwindlabs/tailwindcss/releases/latest) for your OS.

```bash
# Install for arm64 macOS
curl -sLO https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-macos-arm64
chmod +x tailwindcss-macos-arm64
mv tailwindcss-macos-arm64 tailwind

# Start a watcher
./tailwind -i style.css -o assets/css/style.css --watch

# Compile and minify your CSS for production
./tailwind -i style.css -o assets/css/style.css --minify
```

## Attribution

* <a href="https://www.flaticon.com/free-icons/axe" title="axe icons">Axe icons created by kerismaker - Flaticon</a>
