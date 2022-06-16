const row = document.getElementById('row');
const btn = document.getElementById('btn');
btn.addEventListener('click', function () {
    const userNumber = parseInt(document.getElementById('number').value);
    document.getElementById('row').innerHTML='';
    if (isNaN(userNumber) == true || userNumber <= 0) {
        document.getElementById('wrong').classList.remove('d-none');
    }
    else {
        document.getElementById('wrong').classList.add('d-none');
        // creo ciclo che va da 1 a 100
        for (let i = userNumber; i <= (userNumber + 100); i++) {
            document.getElementById('row').classList.remove('d-none');
            const colToAppend = document.createElement('div');
            colToAppend.classList.add('col', 'height', 'fs-2', 'fw-bold', 'pt-4', 'me-3');
            // controllo che sia divisibile per 3 e 5
            if (((i % 3) == 0) && ((i % 5) == 0)) {
                console.log('FizzBuzz');
                colToAppend.innerHTML = "FizzBuzz";
                colToAppend.classList.add('bg-danger');
            }
            else {
                // controllo che sia divisibile per 3
                if ((i % 3) == 0) {
                    console.log('Fizz');
                    colToAppend.innerHTML = "Fizz";
                    colToAppend.classList.add('bg-success');
                }
                // controllo che sia divisibile per 5
                else if ((i % 5) == 0) {
                    console.log('Buzz');
                    colToAppend.innerHTML = "Buzz";
                    colToAppend.classList.add('bg-warning');
                }
                // zona di esclusione 
                else {
                    console.log(i);
                    colToAppend.innerHTML = i;
                    colToAppend.classList.add('bg-primary');
                }
            }
            row.append(colToAppend);
        }
    }
})
