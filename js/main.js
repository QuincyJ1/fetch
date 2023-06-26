// api - duomenu mainai.



console.log('START');

function average(list) {
    let sum = 0;
    for (const item of list) {
        sum += item;
    }
    return sum / list.length;
}

const localError = 'http://localhost:3025/data/random.json'

const response = fetch(local) // kreipiames i duomenis
    .then((res) => res.json()) //isparsinam. Pasidaro normalus duomenu objektas.
    .then((data) => { 
        const marksAverage = average(data.marks);
        console.log('Studento vidurkis:', marksAverage) // suduomenim darom ka norim 
    }) 
    .finally(() => {
        console.log('paskutinis zingsnis');
    });


console.log(response);

console.log('END');