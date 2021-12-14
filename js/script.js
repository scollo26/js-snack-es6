// Scrivere una funzione  che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.




let array = [1,2,7,10,33,67,89];






// funzione con foreach

function maxminArray(array, a, b){
    let newArray =[];
    array.forEach(element => {
        if(element > a && element < b){
            newArray.push(element);
        }
        
    });

    return newArray;
}
let arrayDue = maxminArray(array,32,90);
console.log(arrayDue);
    




