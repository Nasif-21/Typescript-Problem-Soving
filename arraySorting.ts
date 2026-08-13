//Sorting an array in assending order
//Take an array
//Take a temporary variable
//Swap the values with previous indexes


const sorted:number[]=[10,55,85,9,76,33,5];

for(let i:number=0;i<=sorted.length-1;i++)
{
    for(let j:number=i+1;j<=sorted.length-1;j++)
    {
        if(sorted[i]>sorted[j])
            {
                let temp:number=sorted[i];
                sorted[i]=sorted[j];
                sorted[j]=temp;
            }
    }
}

console.log("Sorted array :"+sorted);