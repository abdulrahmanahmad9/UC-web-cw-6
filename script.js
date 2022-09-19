// let weight = 100;
// let height


function BMI(w,h) {
    
    return w / ( h * h );

   }

   console.log (BMI)

   function status (bmi) {
    if (bmi < 18.5) {
        return " you are very thin"
    }
    else if ( bmi >= 18.5 & bmi < 25){

        return "Your are healthy"
    }
    else ( bmi >= 25)
    {
        return " Your are over weight"
    }
   }

   function calculate() {
    let w= document.getElementById('weight').value 
    let h= document.getElementById ('height').value
    let  bmiresults = BMI(w,h);
    let desc = status (bmiresults)
    console.log (desc)
    let theresults = document.getElementById('result').innerText= desc;
     }

     
     
