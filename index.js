var first_c=document.getElementById("first");
var second_c=document.getElementById("second");
var third_c = document.getElementById("third");
document.getElementById("factor").addEventListener("click",factor);
function factor()
{
    console.log("button clicked");
    let first = parseInt(first_c.value)
    let second = parseInt(second_c.value);
    let third = parseInt(third_c.value);
    if(validate(first,second,third))
    {
        calculate(first,second,third);
    }
    else
    {
        first_c.value=0;
        second_c.value=0;
        third_c.value=0;
    }
}
function calculate(first,second,third)//first = 2, second = 5, third = -3
{
    console.log("calculating")
    let number = first * third;
    if(number<0)
    {
        let dividend;
        for(i=number;i<0;i++)
        {
            dividend = number/i;//-6/-6 dividend = 1
            if((i+dividend)==second) // -6 + 1 = -5
            {
                console.log(`${first}x^2 ${i}x ${dividend}x ${third}`);
                factoriser(first,i,dividend,third);
                break;
            }
            else
            {
                document.getElementById("result").innerHTML="NoAns";
            }
        }
    }
    else
    {
        let dividend;
        for(let i=1;i<=number;i++)
        {
            dividend = number/i;
            if((i+dividend)==second) 
            {
                console.log(`${first}x^2 ${i}x ${dividend}x ${number}`);
                factoriser(first,i,dividend,third);
                break;
            }
            else
            {
                document.getElementById("result").innerHTML="NoAns";
            }
        }
        // if(!Number.isInteger(dividend))
        // {
        //     document.getElementById("result").innerHTML="NoAns";
        // }
    }
}
function factoriser(first, i,dividend,third)
{
    console.log("factorising")
    let hehe=0;
    let haha=0;
    let biggestNumber=bigFinder(first,i);
    let smallestNumber=smallFinder(first,i);
    let swany,swan,wadia,waddy,lol,lmao;
    for(j=smallestNumber;j<=biggestNumber;j++)
    {
        swany = first/j;
        swan = i/j;
        if(Number.isInteger(swany)&&Number.isInteger(swan))
        {
            hehe=j;
        }
    }
    biggestNumber=bigFinder(dividend,third);
    smallestNumber=smallFinder(dividend,third);
    for(j=smallestNumber;j<=biggestNumber;j++)
    {
        wadia = dividend/j;
        waddy= third/j;
        if(Number.isInteger(wadia)&&Number.isInteger(waddy))
        {
            haha=j;
            lmao=wadia;
            lol=waddy;
        }
    }
    let output=`(${hehe}x + ${haha})(${lmao}x + ${lol})`;
    console.log()
    document.getElementById("result").innerHTML=output;
}
function validate(first,second,third)
{
    if(isNaN(first) || isNaN(second) || isNaN(third))
    {
        alert("wrong input check again");
        return false;
    }
    return true;
}   
function bigFinder(number_1,number_2)
{
    if(number_1>number_2) return number_1;
    else return number_2;
}
function smallFinder(number_1,number_2)
{
    if(number_1<number_2) return number_1;
    else return number_2;
}
