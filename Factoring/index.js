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
        if(first < 0)
        {
            first *= -1;
            second *= -1;
            third *= -1;
        }
        calculate(first,second,third);
    }
    else
    {
        first_c.value=0;
        second_c.value=0;
        third_c.value=0;
    }
}
function calculate (first,second,third)
{
    let number = first * third;
    console.log(second)
    if(second > 0 && number > 0)
    {
        let dividend;
        for(i = 1; i <= number; i++)
        {
            dividend = number/i;
            if(dividend + i == second)
            {
                console.log(dividend + " " + i)
                factorise(first,dividend,i,third);
                break;
            }
            else
            {
                document.getElementById("result").innerHTML="NoAns";
            }
        }
    }
    else if(second < 0 && number > 0)
    {
        let dividend = number / -1;
        for(i = -1; i<0; i--)
        {
            dividend = number / i;
            if(dividend + i == second)
            {
                console.log(dividend + " " + i)
                factorise(first,dividend,i,third);
                break;
            }
            else
            {
                document.getElementById("result").innerHTML="NoAns";
            }
        }
     
    }
    else if (second > 0 && number < 0)
    {
        let dividend;
        for(i = 1; i <= Math.abs(number); i++)
        {
            dividend = number/i;
            if(dividend + i == second)
            {
                factorise(first,dividend,i,third);
                break;
            }
            else
            {
                document.getElementById("result").innerHTML="NoAns";
            }
        }
    }
    else if (second < 0 && number < 0)
    {
        let dividend;
        for(i = -1; i >= number; i--)
        {
            dividend = number/i;
            if(dividend + i == second)
            {
                factorise(first,dividend,i,third);
                break;
            }
            else
            {
                document.getElementById("result").innerHTML="NoAns";
            }
        }
    }
}
function factorise(first,swany,wadia,third)//1
{
    console.log("factorising")
    lol = gcd(first,swany);
    if(lol < 0) lol *=-1;
    let lmao,sth,w;
    lmao = gcd(wadia,third);
    sth = wadia/lmao;
    w = third/lmao;
    if(sth < 0) 
    {
        sth *= -1;
        w *= -1;
    }
    let output=`(${lol}x + ${lmao})(${sth}x + ${w})`;
    console.log(output)
    document.getElementById("result").innerHTML= "Ans:" + output;
}
function gcd(k, n) {
    return k ? gcd(n % k, k) : n;
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
    return number_1>number_2 ? number_1 : number_2;
}
function smallFinder(number_1,number_2)
{
    return number_1<number_2 ? number_1 : number_2;
}
