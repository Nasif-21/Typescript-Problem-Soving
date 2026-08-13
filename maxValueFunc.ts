//Finding maximum value using function
//Create a function
//Pass the array as parameter
//Will return the maximum number
//Done

function findMax(num:number[]):number
{
    let max:number=num[0]!;

    for(let i:number=0;i<num.length;i++)
    {
        if(num[i]!>max)
        {
            max=num[i]!
        }
    }
   
    return max;
}


const numArray:number[]=[10,8,99,62,58,45,86,2,55];

const maximum:number=findMax(numArray);

console.log("Maximum number of this array is: "+maximum);