function simpleInterest(principal,rate,time){
    let result= (principal*rate*time)/100;
    return result;
}

console.log(simpleInterest(100,4,5));
