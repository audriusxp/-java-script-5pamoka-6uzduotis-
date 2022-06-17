window.onload =  function(){
const masyvas =[5,12,3,6,8,14,15,5,6,10];
console.log(masyvas);
console.log(ieskomasSkaicius(masyvas));
}

function ieskomasSkaicius(masyvas){

    for (let i = 0; i < masyvas.length; i++) 
    {
       if (lygu(masyvas[i]))
     {
      return true;
    }
      else 
     {
      return false;
     } 
    }

        
   }
function lygu(x)
{
    return x= 12; 
} 