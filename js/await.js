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
const local = 'http://localhost:3025/data/marks.json'

// const response = fetch(local) // kreipiames i duomenis
//     .then((res) => res.json()) //isparsinam. Pasidaro normalus duomenu objektas.
//     .then((data) => { 
//         const marksAverage = average(data.marks);
//         console.log('Studento vidurkis:', marksAverage) // suduomenim darom ka norim 
//     }) 
//     .finally(() => {
//         console.log('paskutinis zingsnis');
//     });
try {
    const response = await fetch(localError);  // kreipimasis
    const data = await response.json(); // isParse'inimas
    const marksAverage = average(data.marks);                    // PABANDE
     
    
    console.log(response);
    console.log(data);
    console.log('Studento vidurkis:', marksAverage)
} catch (err) {            //                                  PASIGAVO KLAIDA
    console.log('Error: negerai cia kazkur');
    console.log(err);
} finally {                                                        // UZBAIGE
    console.log('Ir cia paskutinis fetch finally zingsnis')  
}



console.log('END');