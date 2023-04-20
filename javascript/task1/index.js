var click=0;
function alertTextBox(div){
    if(click!=" "){
        alert(click + " " + div.innerHTML);
    }else{
        alert(div.innerHTML);
    }
    click=div.innerHTML;
}