const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const encodedLetters = expr.match(/.{1,10}/g);
    const decodedLetters = encodedLetters.map(encodedLetter => {
        const chunks = encodedLetter.match(/.{1,2}/g);
        const dotsAndDashes = chunks.map(chunk => {
            if (chunk === '10') {
                return '.';
            } else if (chunk === '11') {
                return '-';
            } else {
                return '';
            }
        });
        const morseCode = dotsAndDashes.join('');
        if (morseCode === '') {
            return ' ';
        } else {
            return MORSE_TABLE[morseCode];
        }
    });
    return decodedLetters.join('');
}

module.exports = {
    decode
}