# truncanator

This truncates text in batches by removing a specified prefix or suffix.
It can also remove duplicates if required.

## Development

truncanator uses TailwindCSS and TailwindUI.

To use Tailwind without NodeJs, you will need to install the latest version of the [Tailwind CLI](https://github.com/tailwindlabs/tailwindcss/releases/latest) for your OS.

```bash
# Install for arm64 macOS
curl -sLO https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-macos-arm64
chmod +x tailwindcss-macos-arm64
mv tailwindcss-macos-arm64 tailwindcss

# Start a watcher
./tailwindcss -i input.css -o output.css --watch

# Compile and minify your CSS for production
./tailwindcss -i input.css -o output.css --minify
```
