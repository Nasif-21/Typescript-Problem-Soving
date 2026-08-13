//Find the fibbonacci series (without swapping)
// Target get an fibbonacci, 0, 0+1=1, 1+1=2,2+3=5........Fn=F(n-1)+F(n-2)+.....Fn

//Declare 2 variable, 1st and 2nd, both is 0 and 1
//Create an temp for saving new value and swapped value
//Shift 1st value to 2nd variable
// Continue until loop ends

let a:number=0;
let b:number=1;
let temp:number;
let output:string="";

for(let i=0;i<10;i++)
{
    output+=a+" ";
    temp=a+b;
    a=b;
    b=temp;


}

console.log(output);