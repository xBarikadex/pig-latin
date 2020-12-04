/*Individual Word Translator*/
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
            newStr = str + "yay";
            return newStr;
            break;
        default:
            let syllable = str.match(/[aeiou]/g) || 0;
            let vowel = str.indexOf(syllable[0]);
            newStr = str.substring(vowel) + str.substring(0, vowel) + "ay";
            return newStr;
    }
}

/*Breaks down the sentence into manageble chucks for pigLatin*/
function repeater(eng) {
    let words = eng.split(' ');
    let counter = words.length;
    translated = "";

    for(i = 0; i < counter; i++) {
        translated += pigLatin(words[i]) + " ";
    }
    console.log(translated);
}
repeater("Khadeem Bernard is the overlord of the West Mec coding students All Hail Mr Bernard");