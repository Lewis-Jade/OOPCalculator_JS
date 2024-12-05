let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let operator = document.getElementById("operators");
const btn = document.getElementById("btn");
var paraContent = document.getElementById("para");
var  header = document.getElementById("header");

let results;

class Calculator{
   constructor(num1,num2){
     this._num1 = num1;
     this._num2 = num2;
   }
 
   

}



class Getsum extends Calculator{
  constructor(num1,num2){
      super(num1,num2);
     
      
    
      
  }
     getSum(results){
       
       num1 = document.getElementById("num1").value ;
           
       num1 = parseFloat(num1);


       num2 = document.getElementById("num2").value ;
           
       num2 = parseFloat(num2);
       
       results  = num1 + num2;
       return results

       

       
     }

}

const getSumObj = new Getsum(num1,num2);

// +++++++++++++++++++++++++==============
class Getdif extends Calculator{
  constructor(num1,num2){
      super(num1,num2);
     
      
    
      
  }
     getDif(results){
       
       num1 = document.getElementById("num1").value ;
           
       num1 = parseFloat(num1);


       num2 = document.getElementById("num2").value ;
           
       num2 = parseFloat(num2);
       
      
       return results = num1 - num2;

       

       
     }

}
const getDifObj = new Getdif(num1,num2);
// +++++++++++++++++++++++++==============
class Getdiv extends Calculator{
  constructor(num1,num2){
      super(num1,num2);
     
      
    
      
  }
     getDiv(results){
       
       num1 = document.getElementById("num1").value ;
           
       num1 = parseFloat(num1);


       num2 = document.getElementById("num2").value ;
           
       num2 = parseFloat(num2);
       
      
       return results = num1 / num2;

       

       
     }

}
const getDivObj = new Getdiv(num1,num2);
// +++++++++++++++++++++++++==============
class Getmult extends Calculator{
  constructor(num1,num2){
      super(num1,num2);
     
      
    
      
  }
     getMult(results){
       
       num1 = document.getElementById("num1").value ;
           
       num1 = parseFloat(num1);


       num2 = document.getElementById("num2").value ;
           
       num2 = parseFloat(num2);
       
      
       return results = num1 * num2;

       

       
     }

}
const getMultObj = new Getmult(num1,num2);


btn.onclick = function(){
    operator = document.getElementById("operators").value;

    if(operator == '+'){
        paraContent = document.getElementById("para").textContent = getSumObj.getSum(results);
        header = document.getElementById("header").textContent = `${num1} + ${num2}`;
      
    }
    else if(operator == '-'){
      paraContent = document.getElementById("para").textContent = getDifObj.getDif(results);
      header = document.getElementById("header").textContent =`${num1} - ${num2}`;
    }
    else if(operator == '/'){
      paraContent = document.getElementById("para").textContent = getDivObj.getDiv(results);
      header = document.getElementById("header").textContent = `${num1} - ${num2}`;
    }
    else {
      paraContent = document.getElementById("para").textContent = getMultObj.getMult(results);
      header = document.getElementById("header").textContent = `${num1} x ${num2}`;
    
    }

   
    
    }


    