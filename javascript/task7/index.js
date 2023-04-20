var arr=[];
function show(){
   var firstValue=parseInt(document.getElementById("rangeFrom").value);
var lastValue =parseInt(document.getElementById("rangeTo").value);
var division =parseInt(document.getElementById("value").value);
  
   for(let i=firstValue; i<lastValue+1; i++){
     if(i%division==0){
        arr.push(i);
        console.log(arr);
     }
   }
  document.getElementById("result").innerHTML=arr;
};
  