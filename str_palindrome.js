function strPalindrome(str){
    const normalizeStr=str.replace(/[^a-z0-9]/gi,'').toLowerCase();
    const revString=normalizeStr.split('').reverse().join('');
    return normalizeStr===revString
}

const inputString='a man,fa plan, a canal,panama!';
if(strPalindrome(inputString)){
    console.log("String is palindrome");
}else{
    console.log("String is not palindrome");
}