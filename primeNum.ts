
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

const numCheck:number=3;

const check=isPrime(numCheck);
console.log(`Given number is ${numCheck} prime and its `+check);