function fact(num:number):number
{
    if(num===1)
    {
        return 1;
    }
    return num*fact(num-1);

}

const numb:number=5;

const factorial:number=fact(numb);

console.log(factorial);