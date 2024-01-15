function convertToPigLatin(word) {
    let vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
    let firstVowelIndex = -1;
    
    for (let i = 0; i < word.length; i++) {
        if(vowels.includes(word[i])) {
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

console.log(convertToPigLatin("hello"))

