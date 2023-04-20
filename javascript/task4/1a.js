function background(first){
    let firstLetter=first.innerHTML[0];
    if(firstLetter==='a'||firstLetter==='e'||firstLetter==='i'||firstLetter==='o'||firstLetter==='u'){
       first.style.background="red";
       }else{
      first.style.background="green";
    }
  }