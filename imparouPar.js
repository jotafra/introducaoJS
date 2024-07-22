
const n1 = 2
const n2 = 3
const n3 = 6

if (verify(n1)){
    console.log("n1 é par!!") 
    }
    else{
        console.log("n1 é impar!!")
    }

if (verify(n2)){
    console.log("n2 é par!!") 
    }
    else{
        console.log("n2 é impar!!")
    }
    
if (verify(n3)){
    console.log("n3 é par!!") 
    }
    else{
        console.log("n3 é impar!!")
    }  

function verify(num){
    if(num % 2 === 0 ){
        return true
    }
}