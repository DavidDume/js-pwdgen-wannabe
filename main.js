const nome = prompt("Inserisci nome:");
const cognome = prompt("Inserici cognome:");
const colore = prompt("Inserisci il tuo colore preferito:");
const anno = "2023";

const passwordHtml = document.getElementById('password');
passwordHtml.innerHTML = nome + cognome + colore + anno;
