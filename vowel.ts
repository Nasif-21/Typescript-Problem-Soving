const inp:string="I am a QA Engineer";


const inpLow=inp.toLocaleLowerCase();

console.log("Vowel in world")

for(let i:number=0;i<inpLow.length;i++)
{
    const ch:string=inpLow.charAt(i);
    if(ch==='a'||ch==='e'||ch==='i'||ch==='o'||ch==='u')
    {
        console.log(ch)
    }
}
