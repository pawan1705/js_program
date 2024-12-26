function Anagrams(str1,str2){
    const normalStr1=str1.replace(/\s+/g,'').toLowerCase();
    const normalStr2=str2.replace(/\s+/g,'').toLowerCase();

// check both string lengths are same or not
if(normalStr1.length !== normalStr2.length){
    return false;
}
    const sortedStr1=normalStr1.split('').sort().join('');
    const sortedStr2=normalStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

const str1="listen";
const str2="silents";
 if(Anagrams(str1,str2))
    console.log(`string1 ${str1} or ${str2} is anagrams`);
    else
        console.log("both strings are not anagrams");
    
 