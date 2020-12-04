function pigLatin(str) {
    let newStr = "";

    switch(str.charAt(0)) {
        case 'A':
        case 'a':
        case 'E':
        case 'e':
        case 'I':
        case 'i':
        case 'O':
        case 'o':
        case 'U':
        case 'u':
            newStr = "";
            newStr = words[i] + "way";
            translated += newStr;
            return translated;
            break;
        default:
            
            let syllable = words[i].match(/[aeiou]/g) || 0;
            let vowel = words[i].indexOf(syllable[0]);
            newStr = words[i].substring(vowel) + words[i].substring(0, vowel) + "ay";
            translated += newStr;
            return translated;
    }
    console.log(translated);
}

function repeater() {
    let words = str.split(' ');
    let counter = words.length;
}
pigLatin("Shell you home tonight eight");