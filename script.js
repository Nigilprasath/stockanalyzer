'use strict';

const buyamount=document.getElementById("buyamount");
const quantityamount=document.getElementById("quantityamount");
const soldamount=document.getElementById("soldamount");
const inputform=document.querySelector("inputform");
const profitamount=document.getElementById("profitamount");
const lossamount=document.getElementById("lossamount");
const profitpercentage=document.getElementById("profitpercentage");
const losspercentage=document.getElementById("losspercentage");
const quantityshare=document.getElementById("shares");
const btncalculate=document.getElementById("btn");

const submit=function(e){
    e.preventDefault();
    if(buyamount.value && quantityamount.value && soldamount.value >0){
        checkProfitLoss(buyamount.value,soldamount.value);
    }
    else{
        alert("enter valid input");
    }
};

const checkProfitLoss=function(buy,sold){
    if(buy<sold){
        let profitamount=(sold-buy)*quantityamount.value;
        let profitpercentage=Math.floor((profitamount/buy)*100);
        console.log("profit");
        profitresult(profitamount,profitpercentage);
    }
    else if(buy==sold){
        console.log("draw");
    }
    else if(buy>sold){
        let lossamount=(sold-buy)*quantityamount.value;
        let losspercentage=Math.floor((lossamount/sold)*100);
        console.log("loss");
        lossresult(lossamount,losspercentage);
    }
    else{
        console.log("big loss");
    }
};
const profitresult=function(profitamount,profitpercentage){
    profitamount.innerText="$"+amount;
    profitpercentage.innerText=percentage+"%";
    quantityshare.innerText=quantityamount.value;
};
const lossresult=function(amount,percentage){
    lossamount.innerText="$"+amount;
    losspercentage.innerText=percentage+"%";
    quantityshare.innerText=quantityamount.value;
};

btncalculate.addEventListener("click",submit);
