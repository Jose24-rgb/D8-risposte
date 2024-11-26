/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(num1, num2) {
    if (num1 === num2) {
    return (num1 + num2) *3;} 
    else {
     return num1 + num2 ;}
    }
    console.log(crazySum(2, 2))
    console.log (crazySum(6, 9))



/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(num) {
    if ((num >= 20 && num <= 100) || num === 400) {
        return true;
    } else {
        return false;
    }
}

console.log(boundary(Inserisci un numero)); /* se è minore di 20 è false o maggiore di 100, se è 400 è true*/


/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(Epicode) {
    return Epicode.split('').reverse().join('');
}

console.log(reverseString("EPICODE"));



/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(ciao) {
    return ciao
        .split(' ')            
        .map(word => word[0].toUpperCase() + word.slice(1)) 
        .join(' ');           
}

console.log(upperFirst("ciao prof"));




/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
    return Array.from({ length: n }, () => Math.floor(Math.random() * 11));
}

console.log(giveMeRandom(10));







//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
    return l1 * l2; 
}

console.log(area(7, 7));



/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(num) {
    let diff = Math.abs(num - 19);
    if (diff > 19) {
        return diff * 3;
    }
    return diff;
}

console.log(crazyDiff(30)); /*o 50*/






/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function codify(stringa) {
    return stringa.startsWith("scrivi") ? stringa : "scrivi" + stringa;
}

console.log(codify("ciao"));




/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(num) {
    if (num % 3 === 0 || num % 7 === 0) {
        return true;  
    }
    return false; 
}
console.log(check3and7(9)); /*true perchè è un multiplo di 3*/
console.log(check3and7(14)); /*true perchè è un multiplo di 7*/
console.log(check3and7(10));/*flase perchè è un multiplo di 10*/





/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/
/* SCRIVI QUI LA TUA RISPOSTA */


function cutString(stringa) {
    return stringa.slice(1, -1);
}
console.log(cutString("ciao"));
