const ary:Number[]=[15.88,9,36,71,58,21];

console.log("General array: "+ary);

for(let i:number=0;i<ary.length;i++)
{
    const index:number=Math.floor(Math.random()*ary.length);
    const temp:number=ary[index];
    ary[index]=ary[i];
    ary[i]=temp;


}


console.log("Shuffled array: "+ary);