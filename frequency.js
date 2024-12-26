//calculate frequency of character in string;

function calculateCharacterFrequency(str){
const frequency={};
const normalizeStr=str.toLowerCase();
for(const char of normalizeStr){
    if(/[a-z0-9]/.test(char)){
        frequency[char]=(frequency[char]||0)+1;
    }
}
return frequency;
}

const inputString="pawan sangare ";
const frequency=calculateCharacterFrequency(inputString);
console.log(frequency);
