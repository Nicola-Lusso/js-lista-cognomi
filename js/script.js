// Lista Cognomi
// Chiedere all’utente il cognome inserendolo in un array con altri cognomi
// Stampa la lista ordinata alfabeticamente
// Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

// VARIABILI
var cognomeUtente = prompt('Inserisci il tuo congome');
var cognomeMaiuscolo = cognomeUtente.charAt(0).toUpperCase() + cognomeUtente.slice(1);
var listaCognomi = [ 'Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];



listaCognomi.push(cognomeMaiuscolo);
// Il metodo sort() ordina gli elementi di un array in place e ritorna l'array.
listaCognomi.sort();

// Stampa la lista in ordine alfabetico
document.getElementById('list').innerHTML = listaCognomi.sort();


// Ciclo for per numerare la posizione dei cognomi
for (var i = 0; i < listaCognomi.length; i++) {
    document.getElementById('list').innerHTML += '<li>' + listaCognomi[i] + '  ' + (i+1) + '</li>';
}
