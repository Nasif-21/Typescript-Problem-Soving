//
const word:string="i live in dhaka"
const words:string[]=word.split(" ");

let final:string="";

for(let i:number=0;i<words.length;i++)
{
    const firstChar:string=words[i].charAt(0).toUpperCase();
    const resStr:string=words[i].substring(1);

    const fullWord:string=firstChar+resStr;

    final+=fullWord+" ";
}

console.log("Final output: "+final)
