// Scrivere una funzione  che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.




// let array = [1,2,7,10,33,67,89];



let array =['a', 'b','c','d','e'] 


// funzione con filter

// function maxminArray(array, a, b){
//     let newArray = array.filter((element) =>{
//         return element > a && element < b;
//     });
//     return newArray;
// }
// let arrayDue = maxminArray(array,4,55);
// console.log(arrayDue);



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
let arrayDue = maxminArray(array,'a','d');
console.log(arrayDue);
    






