function isPrime(num:number):boolean
{
    if(num===0||num<0)
    {
       throw new Error("Value cannot be 0 or less than 0")
    }
    for(let i:number=2;i<num;i++)
    {
        if(num%i===0)
        {
            return false;
            break;
        }
    }
    return true;
}

const n:number=10;
let count:number=0;

let num:number=2;

while(count<n)
{
    if(isPrime(num))
    {
        console.log(num)
        count++;
    }
    num++;

}


