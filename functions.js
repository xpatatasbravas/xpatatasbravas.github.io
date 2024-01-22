function convertToPigLatin(word) {
    let vowels = ["a", "e", "i", "o", "u"];
    let firstVowelIndex = -1;
    word = word.toLowerCase();


    for (let i = 0; i < word.length; i++) {
        if(vowels.includes(word[i].toLowerCase())) {
            firstVowelIndex = i;
            break;
        }
    }

    if (firstVowelIndex === -1) {
        return word + "ay";
    }

    else if (firstVowelIndex === 0) {
        return word + "way";
    }

    else {
        return word.substring(firstVowelIndex) +  word.substring(0, firstVowelIndex) + "ay";
    }
}


if (word.lenght > 100) {
    console.log("Too large word")
}