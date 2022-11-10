for (let i=0; i<9; i++){
    document.getElementById('NC').innerHTML+='<div class="blockM">'+'</div>';
}


let o= 'o';


let x= 'x';



let go=1;
document.getElementById('NC').onclick=function(event){
    if(go%2==0){
        event.target.innerHTML=o;
    }
    else{
        event.target.innerHTML=x;
    }
    go++;
    checkWinner();
}

function checkWinner(){
 var allblock=document.getElementsByClassName('blockM');

       if(allblock[0].innerHTML==x && allblock[1].innerHTML==x && allblock[2].innerHTML==x){
   alert('X winers');
       }    
       if(allblock[3].innerHTML==x && allblock[4].innerHTML==x && allblock[5].innerHTML==x){
        alert('X winers');
            }    
       if(allblock[6].innerHTML==x && allblock[7].innerHTML==x && allblock[8].innerHTML==x){
                alert('X winers');
                    }    
        if(allblock[0].innerHTML==x && allblock[3].innerHTML==x && allblock[6].innerHTML==x){
                        alert('X winers');
                            }    
        if(allblock[1].innerHTML==x && allblock[4].innerHTML==x && allblock[7].innerHTML==x){
                                alert('X winers');
                                    }    
        if(allblock[2].innerHTML==x && allblock[5].innerHTML==x && allblock[8].innerHTML==x){
        alert('X winers');
         }    
        if(allblock[0].innerHTML==x && allblock[4].innerHTML==x && allblock[8].innerHTML==x){
        alert('X winers');
         }    
        if(allblock[2].innerHTML==x && allblock[4].innerHTML==x && allblock[6].innerHTML==x){
         alert('X winers');
         }    
        if(allblock[0].innerHTML==o && allblock[1].innerHTML==o && allblock[2].innerHTML==o){
        alert('O winers');
        }    
        if(allblock[3].innerHTML==o && allblock[4].innerHTML==o && allblock[5].innerHTML==o){
        alert('O winers');
        }    
         if(allblock[6].innerHTML==o && allblock[7].innerHTML==o && allblock[8].innerHTML==o){
         alert('O winers');
         }    
        if(allblock[0].innerHTML==o && allblock[3].innerHTML==o && allblock[6].innerHTML==o){
        alert('O winers');
         }    
        if(allblock[1].innerHTML==o && allblock[4].innerHTML==o && allblock[7].innerHTML==o){
        alert('O winers');
        }    
        if(allblock[2].innerHTML==o && allblock[5].innerHTML==o && allblock[8].innerHTML==o){
        alert('O winers');
         }    
        if(allblock[0].innerHTML==o && allblock[4].innerHTML==o && allblock[8].innerHTML==o){
          alert('O winers');
                               }    
        if(allblock[2].innerHTML==o && allblock[4].innerHTML==o && allblock[6].innerHTML==o){
          alert('O winers');
            }                                                               
   }