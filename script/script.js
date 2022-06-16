const row = document.getElementById('row');

// creo ciclo che va da 1 a 100
for(let i=1; i<=100; i++){
    const colToAppend = document.createElement('div');
    colToAppend.classList.add('col-2','height','fs-2','fw-bold','pt-4','me-3');
    // controllo che sia divisibile per 3 e 5
    if(((i%3)==0) && ((i%5)==0))
    {
        console.log('FizzBuzz');
        colToAppend.innerHTML = "FizzBuzz";
        colToAppend.classList.add('bg-danger');
    }
    else{
        // controllo che sia divisibile per 3
        if((i%3)==0)
        {
            console.log('Fizz');
            colToAppend.innerHTML = "Fizz";
            colToAppend.classList.add('bg-success');
        }
        // controllo che sia divisibile per 5
        else if ((i%5)==0) {
            console.log('Buzz');
            colToAppend.innerHTML = "Buzz";
            colToAppend.classList.add('bg-warning');
        }
        // zona di esclusione 
        else{
            console.log(i);
            colToAppend.innerHTML = i;
            colToAppend.classList.add('bg-primary');
        }
    }
    row.append(colToAppend);
}