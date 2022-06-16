// creo ciclo che va da 1 a 100
for(let i=1; i<=100; i++){
    // controllo che sia divisibile per 3 e 5
    if(((i%3)==0) && ((i%5)==0))
    {
        console.log('FizzBuzz');
    }
    else{
        // controllo che sia divisibile per 3
        if((i%3)==0)
        {
            console.log('Fizz');
        }
        // controllo che sia divisibile per 5
        else if ((i%5)==0) {
            console.log('Buzz');   
        }
        // zona di esclusione 
        else{
            console.log(i);
        }
    }
}