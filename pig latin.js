function translatePigLatin(str) {
    let words = str.split(' ');
    let wordCount = words.length;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = "";
    let translated = "";

    for (i=0; i < wordCount; i++) {
        if (vowels.indexOf(words[0]) > -1) {
            newStr = words[i] + "way ";
            translated += newStr;
        } else {
            let firstMatch = words[i].match(/[aeiou]/g) || 0;
            let vowel = words.indexOf(firstMatch[0]);
            newStr = words.substring(vowel) + words[i].substring(0, vowel) + "ay ";
            translated += newStr;
        }
    }
    console.log(translated);
}

translatePigLatin("and the bird");


function test(hi) {
    let newHi = hi.split(' ');
    console.log(newHi);
}
test("gdfgsfdgs dsfg");




function pigLatin(str) {
    let words = str.split(' ');
    let wordCount = words.length;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = "";
    let translated = "";

    for (i=0; i < wordCount; i++) {
        if ()
    }
}