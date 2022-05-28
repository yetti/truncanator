document.addEventListener('alpine:init', () => {
  window.Alpine = Alpine;
})

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
  
window.truncanator = function() {
  return {
    removePrefix: false,
    removeSuffix: false,
    removeDuplicates: false,

    input: "",
    output: "",

    prefixes: "",
    suffixes: "",

    processing: false,

    truncate() {
      console.log('truncating...');
      this.processing = true;

      try {
        let outputLines = [];

        const inputLines = this.input.split(/\r?\n/);
        inputLines.forEach(line => {
          const unwrappedText = this.unwrapQuotedText(line);
          let filename = this.getFilename(unwrappedText);

          if (this.removePrefix) {
            this.prefixes.split(',').forEach(prefix => {
              filename = this.truncatePrefix(filename, prefix);
            });
          }

          if (this.removeSuffix) {
            this.suffixes.split(',').forEach(suffix => {
              filename = this.truncateSuffix(filename, suffix);
            })
          }

          outputLines = [
            ...outputLines,
            filename
          ]
        })

        this.output = this.removeDuplicates ? [...new Set(outputLines)].join('\n') : outputLines.join('\n');
      } catch (ex) {
        console.error(ex);
      }

      setTimeout(() => {
        
      }, 5000);

      this.processing = false;
      console.log('done!');
    },

    unwrapQuotedText(txt) {
      return txt.replace(/(^"|"$)/g, '');
    },

    getFilename(path) {
      return path.split('\\').pop().split('/').pop()
    },

    truncatePrefix(txt, prefix) {
      return txt.replace(new RegExp('^' + prefix.trim()), '');
    },

    truncateSuffix(txt, suffix) {
      return txt.replace(new RegExp(suffix.trim() + ".[^/.]+$"), '')
    },

    processBtn() {
      if (this.processing) {
        return `
          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Processing...
        `;
      } else {
        return `Process`;
      }
    },
  }
}
