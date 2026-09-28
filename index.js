function isPrime(number){
if(number <= 1){
    return false;
}
for (let index = 2; index < number; index++) {
    if(number % index === 0){
        return false;

    }
   
    
}
 return true;

}
module.exports = { isPrime };
isPrime(7)
isPrime(4)
