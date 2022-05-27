document.addEventListener('alpine:init', () => {
  window.Alpine = Alpine;
})
  
window.truncanator = function() {
  return {
    removePrefix: false,
    removeSuffix: false,
    removeDuplicates: false,

    input: "",
    output: "",

    prefixes: "",
    suffixes: "",

    truncate() {
      let outputLines = [];

      const inputLines = this.input.split(/\r?\n/);
      inputLines.forEach(line => {
        const unwrappedText = this.unwrapQuotedText(line);
        let filename = this.getFilename(unwrappedText);

        if (this.removePrefix) {
          this.prefixes.split(',').forEach(prefix => {
            filename = truncatePrefix(filename, prefix);
          });
        }

        if (this.removeSuffix) {
          this.suffixes.split(',').forEach(suffix => {
            filename = truncateSuffix(filename, suffix);
          })
        }

        outputLines = [
          ...outputLines,
          filename
        ]
      })

      this.output = this.removeDuplicates ? [...new Set(outputLines)].join('\n') : outputLines.join('\n');
    },

    unwrapQuotedText(txt) {
      return txt.replace(/(^"|"$)/g, '');
    },

    getFilename(path) {
      return path.split('\\').pop().split('/').pop()
    },

    truncatePrefix(txt, prefix) {
      return filename.replace(new RegExp('^' + prefix.trim()), '');
    },

    truncateSuffix(txt, suffix) {
      return txt.replace(new RegExp(suffix.trim() + ".[^/.]+$"), '')
    },
  }
}
