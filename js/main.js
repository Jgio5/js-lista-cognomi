// Array cognomi
var cognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
console.log(cognomi);

// Chiedo il cognome all'utente
var cognomeUtente = prompt('Qual è il tuo cognome?');
// debug iniziale con maiuscola
cognomeUtente = cognomeUtente.charAt(0).toUpperCase() + cognomeUtente.slice(1).toLowerCase();

// Inserisco cognome utente dentro l'array
cognomi.push(cognomeUtente);
console.log(cognomi);

// Cognomi in ordine alfabetico
var cognomiMisti = cognomi;
cognomiMisti.sort();
console.log(cognomiMisti);

// posizione umana nell'array con +1
console.log(cognomiMisti.indexOf(cognomeUtente) + 1);

document.getElementById('lista').innerHTML = cognomiMisti;
document.getElementById('cognome_utente').innerHTML = cognomeUtente;
document.getElementById('posizione_cognome').innerHTML = (cognomiMisti.indexOf(cognomeUtente) + 1);
