//Find the maximum number from an array
//Consider 1st index as max
//Compare them with rest of array value
//If its bigger, change value

let numAry:number[]=[15,33,25,89,74,2,65];
let maxValue:number=numAry[0]!;

for(let i:number=0;i<=numAry.length;i++){
    if(numAry[i]!>maxValue)
    {
        maxValue=numAry[i]!;

    }

}

console.log("Maximum value in the array is :"+maxValue)