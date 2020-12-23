// Email obfuscator script 2.1 by Tim Williams, University of Arizona
// Random encryption key feature coded by Andrew Moulden
// This code is freeware provided these four comment lines remain intact
// A wizard to generate this code is at http://www.jottings.com/obfuscator/
const coded = "eZ1ZN@FyngChB.fJ"
const key = "a3KoqHkTvpObS1m5hu4yIlAVresQ2iCWfJc7MnEjNZwxd8Rzg0PLGBYU9XFt6D"
var shift = coded.length
var link = ""

for (i = 0; i < coded.length; i++) {
    if (key.indexOf(coded.charAt(i)) == -1) {
        ltr = coded.charAt(i)
        link += (ltr)
    }
    else {
        ltr = (key.indexOf(coded.charAt(i)) - shift + key.length) % key.length
        link += (key.charAt(ltr))
    }
}

// https://stackoverflow.com/a/59079172
const emailLink = document.querySelector('a[data-gen-email]');
emailLink.setAttribute('href', 'mailto:' + link);