// This is the link to this JavaScript Coding Challenge
https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

function duplicateEncode(word){
    // We use the for loop to iterate on every character of the word, and nest another for loop inside so we can compare each character to itself and declare a letter counter. We then concatenate the letter and the counter and push it into the lettercounter array. 
    lettercounter = []
    for(i=0; i<=word.length-1; i++){
        counter = 0
        for(j=0; j<=word.length-1; j++){
            // console.log(word[i], word[j])
            if(word[i] == word[j]){
                counter++
            }
        }
        // console.log(word[i], counter)
        lettercounter.push(word[i].concat(counter))
        // console.log('========')
    }
    // console.log(lettercounter)

    // The format output of each element in the lettercounter array will be the character and the number of times it appeared in the string. We will then slice the letter to leave the number and parse it so we can set a condition that if it is equal to 1 it will push an open parenthesis and a close one if otherwise. We convert the array into a string and then use the replace function to omit all commas and replace it with a single space
    numarr = []
    for(i=0; i<=lettercounter.length-1; i++){
        // console.log(lettercounter[i])
        // console.log(parseInt(lettercounter[i].slice(1,2)))
        numarr.push(parseInt(lettercounter[i].slice(1,2)))
    }
    // console.log(numarr)

    array = []
    for(i=0; i<=numarr.length-1; i++){
        if(numarr[i] == 1){
            array.push('(')
        } else {
            array.push(')')
        }
    }
    // console.log(array.toString())
    const result = array.toString().replace(/,/g, '');
    console.log(result);

}
duplicateEncode('dindii')
console.log('========')
duplicateEncode('recede')
console.log('========')
duplicateEncode('success')
console.log('========')
duplicateEncode('(( @')
console.log('========')
duplicateEncode('carleyeshield')