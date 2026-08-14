// Create a reverse string function to reverse the string
// Create a function who passes string as parameter
// Put that string and ensure no gap between them
// Create an empty variable to pass the result
// Travel the array backward
// Put the result into the array
// Return the string


function reverseString(str:string):string
{
    const chr:string[]=str.split("");
    let reverse:string="";

    for(let i:number=chr.length-1;i>=0;i--)
    {
        reverse+=chr[i];

    }

    return reverse;

}

const myString:string="Hello, I am normal string";

console.log("Normal string: "+myString)
const revStr=reverseString(myString);
console.log("Reversed string: "+revStr);